const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const getUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await userModel.getUserByUsername(username);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Directly compare the provided password with the stored password
    if (password !== user.password) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user.id, username: user.username },
      "YOUR_SECRET_KEY",
      { expiresIn: "1h" }
    );

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getUser,
};
