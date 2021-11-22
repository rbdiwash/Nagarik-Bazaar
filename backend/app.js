const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv/config");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3003;
//import routes

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PostRoute = require("./posts");
const authRoute = require("./auth");

app.use("/posts", PostRoute);
app.use("/auth", authRoute);
app.use("/uploads", express.static(path.join(`${__dirname}/uploads`)));

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
app.listen(PORT, () => {
  console.log("running");
});
