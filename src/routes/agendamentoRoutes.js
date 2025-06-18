const express = require('express');
const router = express.Router();
const {
  createAgendamento,
  getAgendamentos,
  deleteAgendamento,
  updateAgendamento
} = require('../controllers/agendamentoController');

router.post('/agendamentos', createAgendamento);
router.get('/agendamentos', getAgendamentos);
router.delete('/agendamentos/:id', deleteAgendamento);
router.put('/agendamentos/:id', updateAgendamento);

module.exports = router;
