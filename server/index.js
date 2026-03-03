const express = require("express");

const app = express();

const data = { a: 1, b: 10 };
const waiitngClients = [];
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/fetchData", (req, res) => {
  res.send(data);
});

app.get("/updateData", (req, res) => {
  data.b = 11;
  if (data.b === 11) {
    console.log(waiitngClients);
    while (waiitngClients.length > 0) {
      let client = waiitngClients.pop();
      client.send(data);
    }
  }
  res.send(data);
});
app.get("/getDataLongPoll", (req, res) => {
  if (data.b === 11) {
  } else {
    waiitngClients.push(res);
  }
});

app.listen(3323, () => {
  console.log("server running");
});
