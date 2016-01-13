"use strict";
import express = require("express");
let router =express.Router();

let count = 0;
    //GET: /count
router.get("/count", (req,res,next) => {
res.send({num: count})
});

//POST: /count
router.post("/count", (req,res,next)=> {
    //req.body should equal --- { num: $number }
    count += req.body.num;
    res.send({message: "Success"});
});

router.delete("/count", (req,res,next) => {
        count = 0;
    res.send({ num: count});
});


export = router;
