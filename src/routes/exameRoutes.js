const express = require("express");
const router = express.Router();
const exameController = require("../controllers/exameController");


router.get("/exames", exameController.listarExames);


router.post("/exames", exameController.adicionarExame);

module.exports = router;
