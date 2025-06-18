// Exemplo de dados de exames, você pode substituir pela lógica real do banco de dados
const exames = [
  {
    id: 1,
    nome: "Hemograma Completo",
    dataSolicitacao: "2025-05-10",
    dataExame: "2025-05-12",
    status: "Realizado",
    profissional: "Dra. Ana Paula Silva",
    resultadoDisponivel: true,
    animal: {
      nome: "Toby",
      especie: "Cachorro",
      raca: "SRD",
      idade: "4 anos",
      sexo: "Macho",
      foto: "/animais/animal1.jpg",
    },
    observacoes: "Jejum de 12h antes do exame.",
  },
  {
    id: 2,
    nome: "Raio-X do Tórax",
    dataSolicitacao: "2025-05-15",
    dataExame: "2025-05-20",
    status: "Agendado",
    profissional: "Dr. Carlos Mendes",
    resultadoDisponivel: false,
    animal: {
      nome: "Luna",
      especie: "Cadela",
      raca: "Border Collie",
      idade: "2 anos",
      sexo: "Fêmea",
      foto: "/animais/animal2.jpg",
    },
    observacoes: "Evitar alimentação 6h antes do exame.",
  },
  {
    id: 3,
    nome: "Glicemia em jejum",
    dataSolicitacao: "2025-05-22",
    dataExame: "2025-05-25",
    status: "Pendente",
    profissional: "Dra. Julia Nogueira",
    resultadoDisponivel: false,
    animal: {
      nome: "Mel",
      especie: "Cadela",
      raca: "Maltês",
      idade: "1 ano",
      sexo: "Fêmea",
      foto: "/animais/animal3.jpg",
    },
    observacoes: "Manter em jejum por 8h.",
  },
];

// Função para listar exames
const listarExames = (req, res) => {
  res.status(200).json(exames);  // Retorna os exames como resposta
};

// Função para adicionar exame (exemplo de implementação)
const adicionarExame = (req, res) => {
  const { nome, dataSolicitacao, dataExame, status, profissional, resultadoDisponivel, animal, observacoes } = req.body;

  const novoExame = {
    id: exames.length + 1,  // Gera um novo ID com base na quantidade de exames
    nome,
    dataSolicitacao,
    dataExame,
    status,
    profissional,
    resultadoDisponivel,
    animal,
    observacoes
  };

  exames.push(novoExame);  // Adiciona o novo exame ao array de exames
  res.status(201).json(novoExame);  // Retorna o exame adicionado
};

module.exports = { listarExames, adicionarExame };
