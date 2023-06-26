const express = require("express");
const db = require("./db");
const authRouter = require("./routes/auth_routes");
const subsRouter = require("./routes/subs_routes");
const oneTimeProductsRouter = require("./routes/oneTimeProducts_routes");
const stripeRouter = require("./routes/stripe_route");
const userProductsRouter = require("./routes/userProducts_route");
const userRouter = require("./routes/user_router");
// DOTENV
require("dotenv").config();

const cors = require("cors");
const cookie = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookie());

//ROUTES
app.use("/api", authRouter);
app.use("/api", subsRouter);
app.use("/api", oneTimeProductsRouter);
app.use("/api", stripeRouter);
app.use("/api", userProductsRouter);
app.use("/api", userRouter);

app.listen(8800, () => {
  console.log("Server is running on port 8800...");
});
