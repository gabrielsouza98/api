const express = require('express');
const app = express();
const cors = require('cors');
const postagensRouter = require('./routes/postagens'); // Importa o arquivo de rotas

app.use(cors()); // Usa o middleware cors
app.use(express.json());

// Usa o router para as postagens
app.use('/postagens', postagensRouter);

// Inicializando o servidor
app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
