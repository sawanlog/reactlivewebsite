var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var db = require("./connection");
const { Menu } = require("./Schema");
const { BookTable } = require("./Schema");
const { RegisterUserDetails } = require("./Schema");
const { LoginUserDetails } = require("./Schema");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
var mailgun = require("mailgun-js"); 
var DOMAIN = "sandbox7c698d81ed614f489ff612c8f53ce6e1.mailgun.org"; 
var API_KEY = "876ff9498de1bd886763528e6170d350-c250c684-e039f5b1"; 
var mg = mailgun({ apiKey: API_KEY, domain: DOMAIN }); 
var emailvalidator = require("email-validator");
JWT_ACC_ACTIVATE = "activatingaccountwithserialkey-2397@Beast"; 
CLIENT_URL = "http://localhost:3000";
RESET_PASS_KEY = "activatingaccountwithserialkey-9723@Beast";

router.get("/breakfast", function (req, res, next) {
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

router.post("/menus", function (req, res, next) {
  Menu.find({ category: req.body.category }, function (err, data) {
    if (err) {
      return res
        .status(500)
        .json({
          status: 500,
          message: `${req.body.category} data not found`,
          result: [],
        });
    } else {
      return res.status(200).json({
        status: 200,
        message: `${req.body.category} data fetched successfully`,
        result: data,
      });
    }
  });
});

router.post("/booktable", (req, res)=> {
  const { day, hour, name, phone, persons } = req.body
  BookTable.findOne({phone: phone}, (err, user) => {
      if(user){
          res.send({message: "Phone number already exist"})
      } else {
          const user = new BookTable({ day, hour, name, phone, persons})
          user.save(err => {
              if(err) {
                  res.send(err)
              } else {
                  res.send( { message: "Successfully Booked Table." })
              }
          })
      }
  })
  
 }) 

 router.post("/register-user", async (req, res) => {
  console.log(req.body);
  var { registername, registeremail, registerpassword } = req.body;

  let hashPassword = await bcrypt.hash(registerpassword, 10); 
  registerpassword += hashPassword; 

  const addUserInDb = new RegisterUserDetails({
    registername,
    registeremail,
    registerpassword,
  });

  if (emailvalidator.validate(registeremail)) {
    // var token = await addUserInDb.generateToken(); 

    var token = await addUserInDb.generateAuthToken(); 

    token = jwt.sign(
      
      { registername, registeremail, registerpassword },
      JWT_ACC_ACTIVATE,
      { expiresIn: "20m" }
    );

    const data = {
      
      from: "noreply@textcorp.com",
      to: registeremail,
      subject: "Account Activation Link",
      text: "Testing some Mailgun awesomness!",
      html: `${CLIENT_URL}/authentication/activate/${token}
      `,
    };
    mg.messages().send(data, function (error, body) {
      
      console.log(body);
    });

    addUserInDb
      .save()
      .then((items) => {
        res.send("Registration Successful");
      })
      .catch((err) => {
        res.send("Registration Unsuccessful");
        console.log(err);
      });
  } else {
    res.status(400).send("Invalid Email");
  }
});

 router.post("/post-login", async (req, res) => {
  try {
    const lemail = req.body.loginemail;
    const lpwd = req.body.loginpassword;
    console.log(lemail, lpwd);

    const errors = [];

    if (!lemail || !lpwd) {
      errors.push({ msg: "Please fill in the required fields" });
    }

    let userFound = await RegisterUserDetails.findOne({
      registeremail: lemail,
    });
    //console.log(userFound, "user found");

    if (userFound) {
      let storedpwd = userFound.registerpassword;
      console.log(storedpwd);

      let userPassword = await RegisterUserDetails.findOne({
        registerpassword: lpwd
      });

      console.log(userPassword);

      if (userPassword.registerpassword == lpwd) {
        let username = userFound.registername;
        res.send("User Logged In",username);
      } else {
        res.send("Inavlid UserName or Password");
      }
    } else {
      res.send("Please Register with valid credentials");
    }
  } catch (error) {
    res.send("Internal server error");
  }
});


router.post("/forgot-password", (req, res) => {
  var { registeremail } = req.body;

  console.log("req", req.body, registeremail);

  RegisterUserDetails.findOne({ registeremail: registeremail }, (err, user) => {
    console.log("data", user);
    if (!user) {
      return res.status(400).json({ error: "User does not exist" });
    }

    token = jwt.sign({ _id: user._id }, RESET_PASS_KEY, {
      expiresIn: "20m",
    });
    console.log(token);

    const mailOptions = {
      from: "noreply@textcorp.com",
      to: registeremail,
      subject: "Password Reset Link",
      text:
        "You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n" +
        "Please click on the following link, or paste this into your browser to complete the process:\n\n" +
        "http://" +
        req.headers.host +
        "/reset/" +
        token +
        "\n\n" +
        "If you did not request this, please ignore this email and your password will remain unchanged.\n",
    };

    return user.updateOne({ resetLink: token }, (error, success) => {
      if (error) {
        return res
          .status(400)
          .json({ error: "Reset Password Link Generation Error" });
      } else {
        mg.messages().send(mailOptions, function (error, body) {
          if (error) {
            return res.json({
              error: error.message,
            });
          }
          return res.json({
            message: "Email has been sent, Kindly follow the instructions",
          });
        });
      }
    });
  });
});

router.post("/reset-pass", (req, res) => {
  //Add this
  try {
    var newPass = req.body;
    var resetLink = req.body;
    console.log(resetLink, newPass);

    if (resetLink) {
      jwt.verify(resetLink, RESET_PASS_KEY, function (error, decodedData) {
        if (error) {
          return res.status(401).json({
            error: "Invalid token or Expired token",
          });
        }

        RegisterUserDetails.findOne({ resetLink }, function (err, user) {
          if (err || !user) {
            return res.status(400).json({
              err: "User with this token does not exist",
            });
          }

          const newResetData = {
            registerpassword: newpass,
            resetLink: "",
          };

          user = _.extend(user, newResetData);

          user.save((err, result) => {
            if (err) {
              res.status(400).json({ err: "Error while resetting password" });
            } else {
              res
                .status(200)
                .json({ success: "Your password has been changed" });
            }
          });
        });
      });
    }
  } catch (err) {
    res.json({ err: "Error..." });
  }
});

router.get("/", function (req, res) {
  res.end("Welcome to DScanteen");
});

module.exports = router;
