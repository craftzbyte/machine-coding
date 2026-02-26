const express = require("express");

const app = express();

const data = { a: 1 };
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/fetchData", (req, res) => {
  res.send(data);
});

app.get("/updateData", (req, res) => {
  data.b = 5;
  res.send(data);
});

app.listen(3323, () => {
  console.log("server running");
});
