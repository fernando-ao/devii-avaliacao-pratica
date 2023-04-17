const express = require("express");
const routes = express.Router();

const products = [
  {
    "id": 1,
    "descricao": "Camiseta",
    "preco": 29.99,
    "cores": ["preto", "branco", "cinza"]
  },
  {
    "id": 2,
    "descricao": "Calça Jeans",
    "preco": 79.99,
    "cores": ["azul claro", "azul escuro"]
  },
  {
    "id": 3,
    "descricao": "Tênis Esportivo",
    "preco": 149.99,
    "cores": ["preto", "branco", "cinza", "azul"]
  },
  {
    "id": 4,
    "descricao": "Jaqueta de Couro",
    "preco": 99.99,
    "cores": ["preto", "marrom"]
  }
];

routes.get("/", (req, res) => {
  res.status(200).send(products);
});

routes.get("/:id", (req, res) => {
  for (const item of products) {
    const id = req.params.id;
    if (id == item.id) {
      res.send(item);
      return;
    }
  }
  res.status(404).send("Product not found");
});

module.exports = routes;
