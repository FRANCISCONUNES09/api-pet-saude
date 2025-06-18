const {Exame} = require("../models")


const listarExames = async (req, res) => {
  try {
    const exames = await Exame.findAll()

    return res.send(exames)
  } catch (error) {
    
  }
};


const adicionarExame = (req, res) => {
  const { nome, dataSolicitacao, dataExame, status, profissional, resultadoDisponivel, animal, observacoes } = req.body;

  const novoExame = {
    id: exames.length + 1,  
    nome,
    dataSolicitacao,
    dataExame,
    status,
    profissional,
    resultadoDisponivel,
    animal,
    observacoes
  };

  exames.push(novoExame);  
  res.status(201).json(novoExame);  
};

module.exports = { listarExames, adicionarExame };
