const express = require("express");
const router = express.Router();
const User = require("../model/user");

router.post("/email", async (req, res) => {
  try {
    const { username } = req.body;
    const emailToSend = await User.find({ username: username });
    const email = emailToSend[0].email;
    res.status(200).json({ email });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
