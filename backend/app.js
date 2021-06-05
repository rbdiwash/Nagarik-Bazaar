const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv/config");
const bodyParser = require("body-parser");
//import routes

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PostRoute = require("./posts");
const authRoute = require("./auth");

app.use("/posts", PostRoute);
app.use("/auth", authRoute);

//routes
app.get("/", (req, res) => {
  res.send("Backend running");
});

//connect to db
mongoose.connect(
  process.env.DB_Connect,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log("connected to DB")
);

//start listening to the server
app.listen(3003, () => {
  console.log("running");
});
