const express = require("express");
const db = require("./db");
const authRouter = require("./routes/auth_routes");
const cors = require("cors");
const cookie = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookie());

//ROUTES
app.use("/api", authRouter);

/* app.get("/api/register", (req, res) => {
  const q = "SELECT * FROM sql_app.users";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    else return res.status(200).json(data);
  });
}); */

app.listen(8800, () => {
  console.log("Server is running on port 8800...");
});
