const express = require("express");
const {
  fetchAllGalery,
  fetchGaleryById,
  addGalery,
  editGalery,
  removeGalery,
} = require("../controllers/galeryController");

const router = express.Router();

router.get("/galery", fetchAllGalery);
router.get("/galery/:id", fetchGaleryById);
router.post("/galery", addGalery);
router.put("/galery/:id", editGalery);
router.delete("/galery/:id", removeGalery);

module.exports = router;
