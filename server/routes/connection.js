const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
//const PORT = process.env.PORT || 3000;

const DB = "mongodb://localhost:27017/DScanteen";
mongoose.connect(
  DB,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  function (err) {
    if (!err) {
      console.log("MONGO DB Connected ");
    } else {
     console.log("Fail to Connect");
    }
  }
);

// require("./UserSchema");
