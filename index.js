const express = require("express");
require("dotenv").config();
const app = express();
const port = 4028;

const sequelize = require("./src/config/database");
sequelize.sync()
  .then(() => console.log("Banco de dados conectado e sincronizado!"))
  .catch((err) => console.log("Erro ao conectar com o banco de dados:", err));

require("./src/models");

const usersRoutes = require("./src/routes/users");
const authRoutes = require("./src/routes/auth");
const agendamentoRoutes = require("./src/routes/agendamentoRoutes");
const adocaoRoutes = require("./src/routes/adocao");
const exameRoutes = require("./src/routes/exameRoutes");
const produtoRoutes = require("./src/routes/produtoRoutes");
const detalheProdutoRoute = require("./src/routes/detalheid");
const avaliacoesRoutes = require("./src/routes/avaliacoes");

const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json());

app.use("/api/detalhes", detalheProdutoRoute);
app.use("/api/produtos", produtoRoutes);
app.use("/api/avaliacoes", avaliacoesRoutes);
app.use("/api/exames", exameRoutes);
app.use(adocaoRoutes);
app.use(agendamentoRoutes);
app.use(usersRoutes);
app.use(authRoutes);

app.listen(port, () => {
  console.log(`O servidor está rodando na porta ${port}`);
});
