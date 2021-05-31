const express = require("express");
const app = express();

//routes
app.get("/", (req, res) => {
  res.send("Backend running");
});
//start listening to the server
app.listen(3003, "runnin");
