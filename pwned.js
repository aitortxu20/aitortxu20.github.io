alert("Alerta con img");

// Ejemplo con Node.js usando Express
const express = require('express');
const app = express();

app.get('/', function(req, res) {
  const userIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  alert(userIP);
  res.send('¡Hola!');
});

app.listen(3000, () => {
  alert('Servidor corriendo en el puerto 3000');
});
