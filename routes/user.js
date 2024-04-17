const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../model/user");

router.post("/signin", async (req, res) => {
  try {
    const { name, username, email, password } = req.body;
    console.log("name", name);
    console.log("username", username);
    console.log("email", email);
    console.log("password", password);
    const user = new User({ name, username, email });
    const userSave = await User.register(user, password);

    await userSave.save();
    res.status(201).json();
  } catch (error) {
    // res.render('error')
    console.log(error);
  }
});

router.get("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/login");
  });
});

module.exports = router;
