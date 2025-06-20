const express = require('express');
const { addDenuncia, getDenuncias } = require('../controllers/denunciaController');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const denuncia = await addDenuncia(req.body);
    res.status(201).json(denuncia);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao registrar a denúncia', error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const denuncias = await getDenuncias();
    res.status(200).json(denuncias);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao carregar as denúncias', error: error.message });
  }
});

module.exports = router;
