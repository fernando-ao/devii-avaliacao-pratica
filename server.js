const express = require("express");
const server = express();
const port = 3000;
const routes = require("./routes");

server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use(routes);

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
