const { Users } = require('../models');
const bcrypt = require('bcrypt');

// Função para criar usuário
async function createUser(req, res) {
   const { password } = req.body;

   bcrypt.hash(password, 10, async (err, hash) => {
      if (err) {
         return res.status(500).send({ error: 'Erro ao criar usuário' });
      }
      try {
         await Users.create({ ...req.body, password: hash });
         return res.status(201).send('Usuário criado com sucesso');
      } catch (error) {
         return res.status(500).send({ error: 'Erro ao criar usuário' });
      }
   });
}

// Função para pegar todos os usuários
async function getuser(req, res) { 
   try {
     const users = await Users.findAll();
     res.status(200).send(users);
   } catch (error) {
      return res.status(500).send({ error: 'Erro ao pegar usuários' });
   }
}

// Função para deletar usuário
async function deleteUser(req, res) {
   const { id } = req.params;
   try {
      await Users.destroy({ where: { id } });
      return res.status(200).send('Usuário deletado com sucesso');
   } catch (error) {
      return res.status(500).send({ error: 'Erro ao deletar usuário' });
   }
}

// Função para atualizar usuário
async function updateUser(req, res) {
   const { id } = req.params;
   try {
      await Users.update(req.body, { where: { id } });
      return res.status(200).send('Usuário atualizado com sucesso');
   } catch (error) {
      return res.status(500).send({ error: 'Erro ao atualizar usuário' });
   }
}

module.exports = {
   createUser,
   getuser,
   deleteUser,
   updateUser
};
