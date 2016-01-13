"use strict";
var express = require("express");
var router = express.Router();
var count = 0;
router.get("/count", function (req, res, next) {
    res.send({ num: count });
});
router.post("/count", function (req, res, next) {
    count += req.body.num;
    res.send({ message: "Success" });
});
router.delete("/count", function (req, res, next) {
    count = 0;
    res.send({ num: count });
});
module.exports = router;
