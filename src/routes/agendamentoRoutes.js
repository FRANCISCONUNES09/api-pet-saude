const express = require("express");
const router = express.Router();
const { Agendamento } = require("../models");

router.post("/api/agendamentos", async (req, res) => {
  try {
    const { pet, dataHora, tipoConsulta, nome, telefone } = req.body;

    const novoAgendamento = await Agendamento.create({
      pet,
      dataHora,
      tipoConsulta,
      nome,
      telefone,
      ligadoAExame: tipoConsulta === "exame"
    });

    return res.status(201).json(novoAgendamento);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao agendar consulta" });
  }
});

router.get("/api/agendamentos", async (req, res) => {
  try {
    const agendamentos = await Agendamento.findAll();
    return res.status(200).json(agendamentos);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao buscar agendamentos" });
  }
});

module.exports = router;
