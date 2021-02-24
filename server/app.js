const express = require("express");
const session = require('express-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const app = express();

const secret = require("./config/secret.json");

const router_index = require("./router/index");
const router_login = require("./router/login");
const router_check = require("./router/check");
const router_post = require("./router/post.js");

app.use(express.static(__dirname + "/static"));
app.use(passport.initialize());
app.use(bodyParser.json());
app.use(session({
 secret: secret.session_key,
 resave: false,
 saveUninitialized: true
}));

app.get("/index", router_index);
app.get("/login", router_login);
app.get("/logout", router_login);
app.get('/auth/google/callback', router_login);
app.get("/post/:idx", router_post);

app.get("/check/login", router_check);

app.listen(8081, () =>{
    console.log("Server is running..");
})