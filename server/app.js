const express = require("express");
const session = require('express-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const app = express();

const secret = require("./config/secret.json");

const router_index = require("./router/index");
const router_check = require("./router/check");

app.use(passport.initialize());
app.use(bodyParser.json());
app.use(session({
 secret: secret.session_key,
 resave: false,
 saveUninitialized: true
}));

app.get("/index", router_index);
app.get("/check/login", router_check);

app.listen(5000, () =>{
    console.log("Server is running..");
})