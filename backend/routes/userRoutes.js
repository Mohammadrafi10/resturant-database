const express = require("express");
const router = express.Router();
const User = require("../models/user.model");

router.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = new User({ email, password });
    await result.save();
    res.status(201).json(result);
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(500).json({ error: err.message || "Internal Server Error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const result = await User.find();
    res.status(200).json(result);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ error: err.message || "Internal Server Error" });
  }
});

module.exports = router;
