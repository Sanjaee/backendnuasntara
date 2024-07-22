const db = require("../config/database");

const getAllTestimoni = async () => {
  const [rows] = await db.query("SELECT * FROM testimoni");
  return rows;
};

const getTestimoniById = async (id) => {
  const [rows] = await db.query("SELECT * FROM testimoni WHERE id = ?", [id]);
  return rows[0];
};

const createTestimoni = async (testimoni) => {
  const { image_url } = testimoni;
  const [result] = await db.query("INSERT INTO testimoni (image_url) VALUES (?)", [image_url]);
  return result.insertId;
};

const updateTestimoni = async (id, testimoni) => {
  const { image_url } = testimoni;
  const [result] = await db.query("UPDATE testimoni SET image_url = ? WHERE id = ?", [image_url, id]);
  return result;
};

const deleteTestimoni = async (id) => {
  const [result] = await db.query("DELETE FROM testimoni WHERE id = ?", [id]);
  return result;
};

module.exports = {
  getAllTestimoni,
  getTestimoniById,
  createTestimoni,
  updateTestimoni,
  deleteTestimoni
};
