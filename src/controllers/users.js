const { Users} = require('../models')

//funcao que cria 
async function createUser(req, res) {
   try {
      await Users.create(req.body)
      return res.status(201).send('Usuário criado com sucesso')
   } catch (error) {
      return res.status(500).send({ error: 'Erro ao criar usuário' })
   }
}

//funcao que pega
async function getuser(req, res)  { 
   try {
     const user = await Users.findAll()
     res.send(user)
   } catch (error) {
      return res.status(500).send({ error: 'Erro ao pegar usuário' })
      
   }
}

async function deleteUser(req, res){
   const {id} = req.params
   try {
      await Users.destroy({ where: { id } })
      return res.status(200).send('usuario deletado com sucesso')
   } catch (error) {
      return res.status(500).send({ error: 'Erro ao deletar usuário' })
   }
}

async function updateUser(req, res) {
   const { id } = req.params
   try {
      await Users.update(req.body, { where: { id } })
      return res.status(200).send('Usuário atualizado com sucesso')
   } catch (error) {
      return res.status(500).send({ error: 'Erro ao atualizar usuário' })
   }
}

module.exports = {
   createUser,
   getuser,
   deleteUser,
   updateUser
}
