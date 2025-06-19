const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Avaliacao = sequelize.define("Avaliacao", {
  comentario: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  estrela: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  produtoId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Avaliacao;
