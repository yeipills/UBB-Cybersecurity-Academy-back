// Importa el módulo Express
const express = require('express');

// Crea una aplicación Express
const app = express();

// Define el puerto en el que se ejecutará el servidor
const port = 3000;

// Define una ruta raíz y su manejador
app.get('/', (req, res) => {
  res.send('Hola Mundo con Express!');
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
