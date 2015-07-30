var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var Blogpost = mongoose.model("Blogpost");


/* GET home page. */
router.get('/', function(req, res, next) {
    Blogpost.find({}, function(err, blogposts) {
        res.send(blogposts);
    });
});

module.exports = router;
