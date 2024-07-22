const { getMitra, updateMitra } = require("../models/mitraModel");

const fetchMitra = async (req, res) => {
  try {
    const mitra = await getMitra();
    res.json(mitra);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const editMitra = async (req, res) => {
  const { image_url } = req.body;
  const mitra = { image_url };

  try {
    await updateMitra(mitra);
    res.status(200).json({
      message: "Mitra updated successfully",
      result: mitra
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.error(error);
  }
};

module.exports = {
  fetchMitra,
  editMitra,
};
