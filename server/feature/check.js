const sendQuery = require("./db");

module.exports.isLogin = (passport) => {
    if(!passport)
        return false;
    return true;
}