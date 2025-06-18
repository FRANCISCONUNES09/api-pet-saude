const express = require("express");
const router = express.Router();
const exameController = require("../controllers/exameController");

// Rota para listar exames
router.get("/exames", exameController.listarExames);

// Rota para adicionar um novo exame (se necessário)
router.post("/exames", exameController.adicionarExame);

module.exports = router;
