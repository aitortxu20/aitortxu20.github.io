alert("Alerta con img");

fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    const userIP = data.ip;
    alert(userIP);
  })
  .catch(error => {
    alert('Error al obtener la IP:', error);
  });

