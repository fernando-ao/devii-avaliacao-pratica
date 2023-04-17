const express = require("express");
const server = express();
const port = 3000;

server.get("/", (req, res) => {
  res.status(200).send("OK");
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
