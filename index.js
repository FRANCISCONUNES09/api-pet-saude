const express = require("express");
require("dotenv").config();
const app = express();
const port = 4028;
require("./src/models");
const usersRoutes = require("./src/routes/users");
const authRoutes = require("./src/routes/auth");
const adocaoRoutes = require('./src/routes/adocao');
app.use(adocaoRoutes);

app.use(express.json());
app.use(usersRoutes);
app.use(authRoutes);

app.listen(port, () => {
  console.log(`O servidor está rodando na porta ${port}`);
});
