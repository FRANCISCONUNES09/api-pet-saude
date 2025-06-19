const express = require("express");
const router = express.Router();
const detalheProduto = require("../controllers/detalheid");

router.get("/:id", detalheProduto);

module.exports = router;
