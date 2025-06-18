const express = require("express");
require("dotenv").config();
const app = express();
const port = 4028;
require("./src/models");
const usersRoutes = require("./src/routes/users");
const authRoutes = require("./src/routes/auth");
const agendamentoRoutes = require("./src/routes/agendamentoRoutes");
const adocaoRoutes = require("./src/routes/adocao");
const exameRoutes = require("./src/routes/exameRoutes");

app.use(express.json());
app.use("/api", exameRoutes);
app.use(adocaoRoutes);
app.use(agendamentoRoutes);
app.use(usersRoutes);
app.use(authRoutes);

app.listen(port, () => {
  console.log(`O servidor está rodando na porta ${port}`);
});
