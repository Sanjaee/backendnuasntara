const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "nusantara",
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error("Database connection failed: ", err.stack);
    return;
  }
  console.log("Connected to database with threadId: ", connection.threadId);
  connection.release();
});

module.exports = pool.promise();
