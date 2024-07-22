const express = require("express");
const {
  fetchAllMitra,
  fetchMitraById,
  addNewMitra,
  editMitra,
  removeMitra,
} = require("../controllers/mitraController");

const router = express.Router();

router.get("/mitra", fetchAllMitra);
router.get("/mitra/:id", fetchMitraById);
router.post("/mitra", addNewMitra);
router.put("/mitra/:id", editMitra);
router.delete("/mitra/:id", removeMitra);

module.exports = router;
