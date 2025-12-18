const app = document.getElementById('app');
// app.innerText = 
const tagHtml = app.innerHTML;
const estilos = app.style;

app.innerHTML = "<h1>Metodo includes()</h1>";
let phrase = "Javascript is awesome";
let result = phrase.includes("awesome");

const text = document.getElementById("resposta");

text.innerText = `${result}`
