const express = require("express");
const router = express.Router();

const check = require("../feature/check");

router.get("/check/login", (req, res) => {
    const is_login = check.isLogin(req.session.passport);

    res.json({"is_login" : is_login});
})

module.exports = router;