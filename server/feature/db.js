const mysql = require('mysql2/promise');
const secret = require("../config/secret.json");

const pool = mysql.createPool(
    {   
        host: 'localhost', 
        user: secret.mysql.user,
        password: secret.mysql.password,
        database: secret.mysql.dbname,
        dateStrings: 'date'
    }
);

const getConnection = function() {
    return pool.getConnection();
};

const sendQuery = async function(query, values) {
    try {
        const connection = await getConnection();
        try {
            const [rows] = await connection.execute(query, values);
            connection.release();
            return rows;
        } catch(err) {
            connection.release();
            console.log("query error");
            console.log(err);
        }
    } catch(err) {
        console.log("db error");
        console.log(err);
    }
};

module.exports = sendQuery