const db = require("../config/database");


const getMitra = async (id) => {
  const [rows] = await db.query("SELECT * FROM mitra WHERE id = ?", [id]);
  return rows[0];
};

const updateMitra = async (id, img_url) => {
  const [result] = await db.query("UPDATE mitra SET img_url = ? WHERE id = ?", [img_url, id]);
  return result;
};


const addMitra = async (mitra) => {
  const { img_url } = mitra;
  const [result] = await db.query("INSERT INTO mitra (img_url) VALUES (?)", [img_url]);
  return result;
};


const deleteMitra = async (id) => {
  const [result] = await db.query("DELETE FROM mitra WHERE id = ?", [id]);
  return result;
};


const getAllMitra = async () => {
  const [rows] = await db.query("SELECT * FROM mitra");
  return rows;
};

module.exports = {
  getMitra,
  updateMitra,
  addMitra,
  deleteMitra,
  getAllMitra,
};
