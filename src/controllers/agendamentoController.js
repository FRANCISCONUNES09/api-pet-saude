const agendarConsulta = async (req, res) => {
  const { pet, dataHora, tipoConsulta, nome, telefone } = req.body;

  if (!pet || !dataHora || !tipoConsulta || !nome || !telefone) {
    return res
      .status(400)
      .json({ mensagem: "Por favor, preencha todos os campos." });
  }

  const agendamento = {
    pet,
    dataHora,
    tipoConsulta,
    nome,
    telefone,
  };

  res.status(200).json({
    mensagem: "Agendamento feito com sucesso!",
    agendamento,
  });
};

module.exports = {
  agendarConsulta,
};
