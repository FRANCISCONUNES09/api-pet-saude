const Denuncia = require('../models/denuncia');

async function addDenuncia(data) {
  try {
    const denuncia = await Denuncia.create(data);
    return denuncia;
  } catch (error) {
    throw error;
  }
}

async function getDenuncias() {
  try {
    const denuncias = await Denuncia.findAll();
    return denuncias;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  addDenuncia,
  getDenuncias,
};
