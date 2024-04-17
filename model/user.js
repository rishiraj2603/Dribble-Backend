const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    trim: true,
  },
  username: {
    type: String,
    require: true,
    trim: true,
  },
  email: {
    type: String,
    require: true,
  },
  //   password: {
  //     type: String,
  //     require: true,
  //     trim: true,
  //   },
});
userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);

module.exports = User;
