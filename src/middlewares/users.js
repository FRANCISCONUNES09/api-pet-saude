const { Users } = require('../models');

// Middleware para validação da criação de usuário
async function validateCreateUser(req, res, next) {
   const { name, email, password } = req.body;

   if (!name || !email || !password) {
      return res.status(400).send({ error: 'Todos os campos são obrigatórios' });
   }

   if (name.length > 255) {
        return res.status(400).send({ error: 'O nome não pode ter mais que 255 caracteres' });
   }

   if (email.length > 255) {
        return res.status(400).send({ error: 'O email não pode ter mais que 255 caracteres' });
   }

   const existingUser = await Users.findOne({
       where: { 
          email: email
       }
   });

   if (existingUser) {
       return res.status(400).send({ error: 'Email já cadastrado' });
   }

   next();
}

module.exports = {
   validateCreateUser
};
