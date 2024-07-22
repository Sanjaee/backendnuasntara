const db = require("../config/database");

const getMitra = async () => {
  const [rows] = await db.query("SELECT * FROM mitra LIMIT 1");
  return rows[0];
};

const updateMitra = async (mitra) => {
  const { image_url } = mitra;
  const [result] = await db.query(
    "UPDATE mitra SET image_url = ? WHERE id = 1",
    [image_url]
  );
  return result;
};

module.exports = {
  getMitra,
  updateMitra,
};
