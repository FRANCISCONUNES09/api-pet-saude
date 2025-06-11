const express = require('express')
require('dotenv').config()
const app = express()
const port = 4028
require('./src/models')
const usersRoutes = require('./src/routes/users')


app.use(express.json())
app.use(usersRoutes)

app.listen(port, () => {
  console.log(`O servidor está rodando na porta ${port}`)
})
