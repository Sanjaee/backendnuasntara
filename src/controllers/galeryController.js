const {
    getAllGalery,
    getGaleryById,
    createGalery,
    updateGalery,
    deleteGalery,
  } = require("../models/galeryModel");
  
  const fetchAllGalery = async (req, res) => {
    try {
      const galery = await getAllGalery();
      res.json(galery);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const fetchGaleryById = async (req, res) => {
    try {
      const galery = await getGaleryById(req.params.id);
      if (!galery) {
        return res.status(404).json({ message: "Gallery item not found" });
      }
      res.json(galery);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const addGalery = async (req, res) => {
    const { image_url } = req.body;
    const galeryItem = { image_url };
  
    try {
      const id = await createGalery(galeryItem);
      res.status(201).json({ id, ...galeryItem });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const editGalery = async (req, res) => {
    const { image_url } = req.body;
    const galeryItem = { image_url };
  
    try {
      const affectedRows = await updateGalery(req.params.id, galeryItem);
      if (affectedRows === 0) {
        return res.status(404).json({ message: "Gallery item not found" });
      }
      res.status(200).json({ message: "Gallery item updated successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const removeGalery = async (req, res) => {
    try {
      const affectedRows = await deleteGalery(req.params.id);
      if (affectedRows === 0) {
        return res.status(404).json({ message: "Gallery item not found" });
      }
      res.status(200).json({ message: "Gallery item deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = {
    fetchAllGalery,
    fetchGaleryById,
    addGalery,
    editGalery,
    removeGalery,
  };
  