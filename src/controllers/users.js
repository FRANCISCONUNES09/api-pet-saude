const { Users} = require('../models')

async function createUser(req, res) {
   try {
      await Users.create(req.body)
      return res.status(201).send('Usuário criado com sucesso')
   } catch (error) {
      return res.status(500).send({ error: 'Erro ao criar usuário' })
   }
}
async function getuser(req, res)  { 
   try {
     const user = await Users.findAll()
     res.send(user)
   } catch (error) {
      return res.status(500).send({ error: 'Erro ao pegar usuário' })
      
   }
   
}

module.exports = {
   createUser,
   getuser
}
