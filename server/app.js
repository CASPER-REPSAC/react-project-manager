const express = require("express");
const app = express();

app.get("/data", (req, res) => {
    const data = [{
        id : "1",
        lastname : "dl",
        firstname : "wlrma"
    }];
    res.json(data);
})

app.listen(5000, () =>{
    console.log("Server is running..");
})