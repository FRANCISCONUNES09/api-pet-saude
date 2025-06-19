const { Produto, Avaliacao } = require("../models");

module.exports = async (req, res) => {
  const { id } = req.params;
  const { comentario, estrela } = req.body;

  try {
    const produto = await Produto.findByPk(id);
    if (!produto) {
      return res.status(404).json({ erro: "Produto não encontrado" });
    }

    const novaAvaliacao = await Avaliacao.create({
      produtoId: id,
      comentario,
      estrela,
    });

    res.status(201).json(novaAvaliacao);
  } catch (error) {
    res.status(500).json({
      erro: "Erro ao enviar comentário",
      detalhes: error.message,
    });
  }
};
