const sequelize = require("../config/database");

const Users = require("./users");
const Exame = require("./exame");
const Agendamento = require("./agendamento");
const Produto = require("./produto");
const Adocao = require("./adocao");
const Denuncia = require("./denuncia"); // Adicionando o modelo de Denúncia

// Sincronização das tabelas
sequelize
  .sync({ alter: true })
  .then(() => console.log("Tabelas sincronizadas com sucesso!"))
  .catch((error) => console.error("Erro ao sincronizar tabelas:", error));

module.exports = {
  Users,
  Exame,
  Agendamento,
  Produto,
  Adocao,
  Denuncia,
  sequelize,
};
