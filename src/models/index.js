const sequelize = require('../config/database');

const Users = require('./users');
const Exame = require('./exame');
const Agendamento = require('./agendamento');
const Produto = require('./produto');
const Avaliacao = require('./avaliacao');

// Associação entre Produto e Avaliacao
Produto.hasMany(Avaliacao, { foreignKey: 'produtoId' });
Avaliacao.belongsTo(Produto, { foreignKey: 'produtoId' });

sequelize.sync({ alter: true })
  .then(() => console.log('Tabelas sincronizadas com sucesso!'))
  .catch((error) => console.error('Erro ao sincronizar tabelas:', error));

module.exports = {
  Users,
  Exame,
  Agendamento,
  Produto,
  Avaliacao,
};
