const express = require('express');
const router = express.Router();

router.post('/adocao', (req, res) => {
  console.log(req.body);
  res.status(200).json({ mensagem: 'Formulário recebido com sucesso!' });
});

module.exports = router;
