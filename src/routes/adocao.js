const express = require('express');
const { addAdocao, getAdocoes, deleteAdocao } = require('../controllers/adocaoController');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const adocao = await addAdocao(req.body);
    res.status(201).json(adocao);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao adicionar adoção', error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const adocoes = await getAdocoes();
    res.status(200).json(adocoes);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter adoções', error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const adocao = await deleteAdocao(req.params.id);
    res.status(200).json({ message: 'Adoção excluída com sucesso', adocao });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao excluir adoção', error: error.message });
  }
});

module.exports = router;
