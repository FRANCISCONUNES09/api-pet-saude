const Adocao = require('../models/adocao');

async function addAdocao(data) {
  try {
    const adocao = await Adocao.create(data);
    return adocao;
  } catch (error) {
    throw error;
  }
}

async function getAdocoes() {
  try {
    const adocoes = await Adocao.findAll();
    return adocoes;
  } catch (error) {
    throw error;
  }
}

async function deleteAdocao(id) {
  try {
    const adocao = await Adocao.destroy({
      where: {
        id: id
      }
    });
    return adocao;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  addAdocao,
  getAdocoes,
  deleteAdocao,
};
