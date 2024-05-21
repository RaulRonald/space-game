//para compilar use "node index.js" nesse diret�rio pelo cmd
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

//o server ir� puxar e ler tudo que est� na pasta public
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
