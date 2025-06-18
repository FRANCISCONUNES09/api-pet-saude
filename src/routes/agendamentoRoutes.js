const express = require("express");
const router = express.Router();
const agendamentoController = require("../controllers/agendamentoController");

router.post("/agendamentos", agendamentoController.agendarConsulta);

module.exports = router;
