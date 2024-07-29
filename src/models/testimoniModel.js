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
  const { img_url, name, jabatan, univ, deskripsi } = testimoni;
  const [result] = await db.query(
    "INSERT INTO testimoni (img_url, name, jabatan, univ, deskripsi) VALUES (?, ?, ?, ?, ?)",
    [img_url, name, jabatan, univ, deskripsi]
  );
  return result.insertId;
};

const updateTestimoni = async (id, testimoni) => {
  const { img_url, name, jabatan, univ, deskripsi } = testimoni;
  const [result] = await db.query(
    "UPDATE testimoni SET img_url = ?, name = ?, jabatan = ?, univ = ?, deskripsi = ? WHERE id = ?",
    [img_url, name, jabatan, univ, deskripsi, id]
  );
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
