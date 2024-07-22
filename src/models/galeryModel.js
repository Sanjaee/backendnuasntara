const db = require("../config/database");

const getAllGalery = async () => {
  const [rows] = await db.query("SELECT * FROM galery");
  return rows;
};

const getGaleryById = async (id) => {
  const [rows] = await db.query("SELECT * FROM galery WHERE id = ?", [id]);
  return rows[0];
};

const createGalery = async (galeryItem) => {
  const { image_url } = galeryItem;
  const [result] = await db.query("INSERT INTO galery (image_url) VALUES (?)", [image_url]);
  return result.insertId;
};

const updateGalery = async (id, galeryItem) => {
  const { image_url } = galeryItem;
  const [result] = await db.query("UPDATE galery SET image_url = ? WHERE id = ?", [image_url, id]);
  return result.affectedRows;
};

const deleteGalery = async (id) => {
  const [result] = await db.query("DELETE FROM galery WHERE id = ?", [id]);
  return result.affectedRows;
};

module.exports = {
  getAllGalery,
  getGaleryById,
  createGalery,
  updateGalery,
  deleteGalery,
};
