const express = require("express");
const userRouter = require("./routes/users_routes");
const authRouter = require("./routes/auth_routes");
const cookieParser = require("cookie-parser");
const db = require("./db");
const app = express();

app.use(express.json());
app.use(cookieParser);

app.use("/api", userRouter);
app.use("/api", authRouter); //authentication

/* app.get("/register", (req, res) => {
  const q =
    "INSERT INTO sql_app.users(`username`, `email`, `password`) VALUES(?)";
  const values = ["alexandra", "ale@yahoo.com", "12345"];
  db.query(q, [values], (err, data) => {
    if (err) console.log(err);
    else console.log("User has been created!");
  });
}); */

app.listen(3000, () => {
  console.log("Server is running on port 3000...");
});
