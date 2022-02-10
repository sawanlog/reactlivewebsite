var mongoose = require("mongoose");
var db = require("./connection");
var express = require("express");
var router = express.Router();
const { Menu } = require("./Schema");

router.get("/breakfast", function (req, res, next) {
 // console.log("api called");
 Menu.find({}, function (err, data) {
    if (err) {
      console.log(err);
      return res.status(500).json({ result: [] });
    } else {
      console.log(data);
      return res.status(200).json({
        status: 200,
        message: "Users data fetched successfully",
        result: data,
      });
    }
  });

});

router.get("/", function (req, res) {
  res.end("hello world");
});

module.exports = router;
