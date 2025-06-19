
const { Exame } = require('../models');
const listarExames = async (req, res) => {
  try {
    const exames = await Exame.findAll();
    return res.json(exames);
  } catch (error) {
    console.error('Erro ao buscar exames:', error);
    return res.status(500).json({ error: 'Erro ao buscar exames' });
  }
};


const adicionarExame = async (req, res) => {
  const { nome, dataSolicitacao, dataExame, status, profissional, resultadoDisponivel, animalnome, observacoes } = req.body;

  try {
    const novoExame = await Exame.create({
      nome,
      dataSolicitacao,
      dataExame,
      status,
      profissional,
      resultadoDisponivel,
      animalnome,
      observacoes
    });
    
    return res.status(201).json(novoExame);
  } catch (error) {
    console.error('Erro ao adicionar exame:', error);
    return res.status(500).json({ error: 'Erro ao adicionar exame' });
  }
};

module.exports = { listarExames, adicionarExame };
