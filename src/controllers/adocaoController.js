const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const cadastrarAdocao = async (req, res) => {
  const { nome, email, telefone, cidade_estado, motivo, ambiente } = req.body;

  const query = `
    INSERT INTO adocoes (nome, email, telefone, cidade_estado, motivo, ambiente)
    VALUES ($1, $2, $3, $4, $5, $6)
  `;

  try {
    const result = await pool.query(query, [
      nome,
      email,
      telefone,
      cidade_estado,
      motivo,
      ambiente,
    ]);
    res
      .status(201)
      .json({ message: "Informações de adoção registradas com sucesso!" });
  } catch (error) {
    console.error("Erro ao cadastrar adoção:", error);
    res.status(500).json({ error: "Erro ao cadastrar adoção!" });
  }
};

module.exports = { cadastrarAdocao };
