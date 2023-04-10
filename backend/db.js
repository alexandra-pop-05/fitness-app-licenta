const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "ale0805",
  database: "sql_app",
  connectionLimit: 10,
});

pool.getConnection((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to database!");
  }
});
module.exports = pool;
