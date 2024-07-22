const {
    getAllTestimoni,
    getTestimoniById,
    createTestimoni,
    updateTestimoni,
    deleteTestimoni
  } = require("../models/testimoniModel");
  
  const fetchAllTestimoni = async (req, res) => {
    try {
      const testimoni = await getAllTestimoni();
      res.json(testimoni);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const fetchTestimoniById = async (req, res) => {
    const { id } = req.params;
    try {
      const testimoni = await getTestimoniById(id);
      if (testimoni) {
        res.json(testimoni);
      } else {
        res.status(404).json({ message: "Testimoni not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const addTestimoni = async (req, res) => {
    const { image_url } = req.body;
    const testimoni = { image_url };
    try {
      const id = await createTestimoni(testimoni);
      res.status(201).json({ id, ...testimoni });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const editTestimoni = async (req, res) => {
    const { id } = req.params;
    const { image_url } = req.body;
    const testimoni = { image_url };
  
    try {
      const result = await updateTestimoni(id, testimoni);
      if (result.affectedRows) {
        res.json({ message: "Testimoni updated successfully", id, ...testimoni });
      } else {
        res.status(404).json({ message: "Testimoni not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const removeTestimoni = async (req, res) => {
    const { id } = req.params;
    try {
      const result = await deleteTestimoni(id);
      if (result.affectedRows) {
        res.json({ message: "Testimoni deleted successfully" });
      } else {
        res.status(404).json({ message: "Testimoni not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = {
    fetchAllTestimoni,
    fetchTestimoniById,
    addTestimoni,
    editTestimoni,
    removeTestimoni
  };
  