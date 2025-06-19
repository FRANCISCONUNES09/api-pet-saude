const express = require('express');
const router = express.Router();
const { Exame } = require('../models');

router.get('/', async (req, res) => {
  try {
    const exames = await Exame.findAll();
    return res.status(200).json(exames);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao buscar exames" });
  }
});

router.post('/', async (req, res) => {
  try {
    const { nome, dataSolicitacao, dataExame, status, profissional, resultadoDisponivel, animal, observacoes } = req.body;

    const novoExame = await Exame.create({
      nome,
      dataSolicitacao,
      dataExame,
      status,
      profissional,
      resultadoDisponivel,
      animalnome: animal.nome,
      animalfoto: animal.foto,  
      observacoes
    });

    return res.status(201).json(novoExame);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao adicionar exame" });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletado = await Exame.destroy({ where: { id } });

    if (deletado) {
      return res.status(200).json({ mensagem: 'Exame deletado com sucesso!' });
    } else {
      return res.status(404).json({ erro: 'Exame não encontrado.' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ erro: 'Erro ao deletar o exame.' });
  }
});

module.exports = router;
