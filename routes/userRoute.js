const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const User = require("../models/userModel");

router.post("/register", async (req, res) => {
  const alreadyExisting = await User.findOne({ email: req.body.user.email }); // Use findOne instead of find
  console.log(alreadyExisting);

  if (alreadyExisting) {
    // Check if alreadyExisting is truthy
    res.status(400).send({
      message: "Email already exists",
    });
    return; // Remove unnecessary console.log and use return without sending a response body
  }

  try {
    const user = await User.create(req.body.user);
    console.log(user);
    res.status(201).send({
      // Use status 201 for successful resource creation
      message: "Success",
      user,
    });
  } catch (err) {
    console.error(err); // Log the error for debugging
    res.status(400).send({
      message: "Something went wrong",
    });
  }
});
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.user.email });
    console.log(user);
    if (user.password === req.body.user.password) {
      res.status(201).send({
        // Use status 201 for successful resource creation
        message: "Success",
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      });
    } else {
      throw new Error("invalid credentials");
    }
  } catch (err) {
    console.error(err); // Log the error for debugging
    res.status(400).send({
      message: "Something went wrong",
    });
  }
});
router.post("/update", async (req, res) => {
  console.log(req.body);
  try {
    const user = await User.findByIdAndUpdate(
      req.body.userid,
      req.body.updatedUser,
      {
        new: true,
      }
    );
    console.log(user);

    res.status(201).send({
      // Use status 201 for successful resource creation
      message: "Success",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    console.error(err); // Log the error for debugging
    res.status(400).send({
      message: "Something went wrong",
    });
  }
});

router.get("/getallusers", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({
      message: "success",
      users,
    });
  } catch (err) {
    res.status(400).json({
      message: "something went wrong",
      err,
    });
  }
});
router.delete("/deleteuser/:userid", async (req, res) => {
  try {
    const { userid } = req.params;
    const user = await User.findByIdAndDelete(userid);
    res.status(204).json({
      message: "success",
      data: user,
    });
  } catch (err) {
    res.status(400).json({
      message: "something went wrong",
      err,
    });
  }
});

module.exports = router;
