const express = require("express");
require("dotenv").config();
const app = express();
const port = 4028;

const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json());

const sequelize = require("./src/config/database");
sequelize
  .sync() 
  .then(() => {
    console.log("Banco de dados conectado e sincronizado!");
    require("./src/models");
  })
  .catch((err) => console.log("Erro ao conectar com o banco de dados:", err));

const usersRoutes = require("./src/routes/users");
const authRoutes = require("./src/routes/auth");
const agendamentoRoutes = require("./src/routes/agendamentoRoutes");
const exameRoutes = require("./src/routes/exameRoutes");
const produtoRoutes = require("./src/routes/produtoRoutes");
const denunciaRoutes = require("./src/routes/denunciaRoutes");

app.use("/api", usersRoutes);
app.use(authRoutes);
app.use("/api/agendamentos", agendamentoRoutes);
app.use("/api/exames", exameRoutes);
app.use("/api/produtos", produtoRoutes);
app.use("/api/denuncias", denunciaRoutes); 

app.listen(port, () => {
  console.log(`O servidor está rodando na porta ${port}`);
});
