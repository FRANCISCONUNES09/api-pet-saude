const { Agendamento } = require('../models');

// Criar agendamento
async function createAgendamento(req, res) {
  try {
    await Agendamento.create(req.body);
    return res.status(201).send('Agendamento criado com sucesso');
  } catch (error) {
    return res.status(500).send({ error: 'Erro ao criar agendamento' });
  }
}

// Listar todos os agendamentos
async function getAgendamentos(req, res) {
  try {
    const agendamentos = await Agendamento.findAll();
    return res.send(agendamentos);
  } catch (error) {
    return res.status(500).send({ error: 'Erro ao buscar agendamentos' });
  }
}

// Deletar agendamento
async function deleteAgendamento(req, res) {
  const { id } = req.params;
  try {
    await Agendamento.destroy({ where: { id } });
    return res.status(200).send('Agendamento deletado com sucesso');
  } catch (error) {
    return res.status(500).send({ error: 'Erro ao deletar agendamento' });
  }
}

// Atualizar agendamento
async function updateAgendamento(req, res) {
  const { id } = req.params;
  try {
    await Agendamento.update(req.body, { where: { id } });
    return res.status(200).send('Agendamento atualizado com sucesso');
  } catch (error) {
    return res.status(500).send({ error: 'Erro ao atualizar agendamento' });
  }
}

module.exports = {
  createAgendamento,
  getAgendamentos,
  deleteAgendamento,
  updateAgendamento
};
