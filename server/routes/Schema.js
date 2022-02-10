const mongoose = require("mongoose");
const schema = mongoose.Schema;
var jwt = require("jsonwebtoken");

const Schema = new schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  image_url: { type: String, required: true },
  price: { type: String, required: true },
  description: { type: String, required: true },
});

const Booktable = new schema({
  day: { type: String, required: true, trim: true },
  hour: { type: String, required: true, trim: true },
  name: { type: String, required: true, trim: true },
  phone: { type: Number, required: true, unique: true },
  persons: { type: String, required: true, trim: true },
});

const formSchema = mongoose.Schema({
  registername: { type: String, required: true },
  registeremail: { type: String, required: true, unique: true },
  registerpassword: {
    type: String,
    trim: true,
    unique: true,
    errorMessage:
      "Password must be greater than 8 and contain at least one uppercase letter, one lowercase letter, and one number",
  },
  tokens: [
    {
      token: { type: String, required: true, unique: true, },
    },
  ],
});
formSchema.methods.generateAuthToken = async function () {
  try {
    const token = jwt.sign(
      { _id: this._id.toString() },
      "dscanteentokengenerator"
    );
    console.log(token);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (err) {
    console.log(err);
  }
};


const loginSchema = mongoose.Schema({
    loginemail: { type: String, required: true, unique: true, },
    loginpassword: { type: String, required: true,unique: true,
    },
  });
  
const LoginUserDetails = new mongoose.model("LoginUserDetails", loginSchema);
const Menu = mongoose.model("menus", Schema);
const BookTable = mongoose.model("booktable", Booktable);
const RegisterUserDetails = new mongoose.model("RegisterUserDetails", formSchema);

module.exports = { Menu, BookTable ,RegisterUserDetails,LoginUserDetails};
