const Produto = require("../models/produto");  // Verifique se o caminho está correto

module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    const produto = await Produto.findByPk(id);  // Usando findByPk para encontrar o produto pelo ID
    if (!produto) {
      return res.status(404).json({ mensagem: "Produto não encontrado" });
    }
    res.json(produto);  // Retorna o produto encontrado
  } catch (error) {
    console.error("Erro ao buscar produto:", error);
    res.status(500).json({ erro: "Erro ao buscar produto", detalhes: error.message });
  }
};
