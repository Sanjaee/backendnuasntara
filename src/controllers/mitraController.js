const {
  getMitra,
  updateMitra,
  addMitra,
  deleteMitra,
  getAllMitra,
} = require("../models/mitraModel");



const fetchAllMitra = async (req, res) => {
  try {
    const mitra = await getAllMitra();
    res.json(mitra);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch mitra" });
  }
};


const fetchMitraById = async (req, res) => {
  try {
    const { id } = req.params;
    const mitra = await getMitra(id);
    if (mitra) {
      res.json(mitra);
    } else {
      res.status(404).json({ error: "Mitra not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch mitra" });
  }
};



const addNewMitra = async (req, res) => {
  try {
    const { img_url } = req.body;
    const newMitra = await addMitra({ img_url });
    res.status(201).json(newMitra);
  } catch (error) {
    res.status(500).json({ error: "Failed to add mitra" });
  }
};



const editMitra = async (req, res) => {
  try {
    const { id } = req.params;
    const { img_url } = req.body;
    const result = await updateMitra(id, img_url);
    if (result.affectedRows > 0) {
      res.json({ message: "Mitra updated successfully" });
    } else {
      res.status(404).json({ error: "Mitra not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to edit mitra" });
  }
};



const removeMitra = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await deleteMitra(id);
    if (result.affectedRows > 0) {
      res.json({ message: "Mitra deleted" });
    } else {
      res.status(404).json({ error: "Mitra not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete mitra" });
  }
};

module.exports = {
  fetchAllMitra,
  fetchMitraById,
  addNewMitra,
  editMitra,
  removeMitra,
};
