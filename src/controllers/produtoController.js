const Produto = require("../models/produto");

const getProdutos = async (req, res) => {
  try {
    const produtos = await Produto.findAll();
    res.json(produtos);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar produtos" });
  }
};

const addProduto = async (req, res) => {
  try {
    const { nome, preco, desconto, imagem } = req.body;
    const novoProduto = await Produto.create({ nome, preco, desconto, imagem });
    res.status(201).json(novoProduto);
  } catch (error) {
    res.status(500).json({ error: "Erro ao adicionar produto" });
  }
};

const deleteProduto = async (req, res) => {
  try {
    const { id } = req.params;
    await Produto.destroy({ where: { id } });
    res.status(200).json({ message: "Produto deletado com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar produto" });
  }
};

module.exports = { getProdutos, addProduto, deleteProduto };
