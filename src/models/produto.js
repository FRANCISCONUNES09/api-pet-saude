const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Produto = sequelize.define("Produto", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  preco: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  desconto: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imagem: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Produto;
