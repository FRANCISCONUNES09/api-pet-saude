const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Agendamento = sequelize.define("Agendamento", {
  pet: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dataHora: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  tipoConsulta: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ligadoAExame: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  }
}, {
  timestamps: false,
});

module.exports = Agendamento;
