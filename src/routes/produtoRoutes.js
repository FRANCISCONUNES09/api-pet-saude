const express = require("express");
const router = express.Router();
const produtoController = require("../controllers/produtoController");

router.get("/", produtoController.getProdutos); 
router.post("/", produtoController.addProduto);
router.delete("/:id", produtoController.deleteProduto);

module.exports = router;
