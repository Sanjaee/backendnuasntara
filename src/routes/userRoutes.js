const express = require("express");
const { getUser } = require("../controllers/userController");

const router = express.Router();

router.post("/users/login", getUser);

module.exports = router;
