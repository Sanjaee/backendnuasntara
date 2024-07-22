const express = require("express");
const { fetchMitra, editMitra } = require("../controllers/mitraController");

const router = express.Router();

router.get("/mitra", fetchMitra);
router.put("/mitra", editMitra);

module.exports = router;
