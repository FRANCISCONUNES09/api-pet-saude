// src/models/exame.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Exame = sequelize.define('Exame', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dataSolicitacao: {
    type: DataTypes.DATE,
    allowNull: false
  },
  dataExame: {
    type: DataTypes.DATE,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false
  },
  profissional: {
    type: DataTypes.STRING,
    allowNull: false
  },
  resultadoDisponivel: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  observacoes: {
    type: DataTypes.STRING,
    allowNull: true
  },
  animalId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Animais', 
      key: 'id'
    }
  }
}, {
  timestamps: false
});

module.exports = Exame;
