// src/routes/agendamentoRoutes.js
const express = require('express');
const Agendamento = require('../models/agendamento'); // Importando o modelo Agendamento
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { pet, dataHora, tipoConsulta, nome, telefone, ligadoAExame } = req.body;

    // Criando um novo agendamento
    const novoAgendamento = await Agendamento.create({
      pet,
      dataHora,
      tipoConsulta,
      nome,
      telefone,
      ligadoAExame,
    });

    res.status(201).json(novoAgendamento);  // Retorna o agendamento criado
  } catch (err) {
    console.error("Erro ao agendar:", err);
    res.status(500).json({ message: "Erro ao agendar", error: err.message });
  }
});

module.exports = router;
