const express = require("express");
const router = express.Router();
const {
  fetchAllTestimoni,
  fetchTestimoniById,
  addTestimoni,
  editTestimoni,
  removeTestimoni
} = require("../controllers/testimoniController");

router.get("/testimoni", fetchAllTestimoni);
router.get("/testimoni/:id", fetchTestimoniById);
router.post("/testimoni", addTestimoni);
router.put("/testimoni/:id", editTestimoni);
router.delete("/testimoni/:id", removeTestimoni);

module.exports = router;
