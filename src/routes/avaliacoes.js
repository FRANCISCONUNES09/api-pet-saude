const express = require("express");
const router = express.Router();
const Avaliacao = require("../models/avaliacao"); // Ou o nome correto do seu modelo

// Endpoint para excluir um comentário
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  
  try {
    const avaliacao = await Avaliacao.findByPk(id);
    
    if (!avaliacao) {
      return res.status(404).json({ erro: "Comentário não encontrado" });
    }
    
    await avaliacao.destroy(); // Exclui o comentário
    res.status(200).json({ mensagem: "Comentário excluído com sucesso" });
    
  } catch (error) {
    console.error("Erro ao excluir comentário:", error);
    res.status(500).json({ erro: "Erro ao excluir comentário" });
  }
});

module.exports = router;
