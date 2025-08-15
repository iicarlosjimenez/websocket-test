const WebSocket = require("ws");

const host = "localhost";
const port = 8080
const wsc = new WebSocket(`ws://${host}:${port}`)
const questions = require("./questions.json");

wsc.on('error', console.error);

wsc.on("open", function open() {
    console.log("Conectado al servidor websocket");

    const question = questions.find(qs => qs.category == "geek")
    
    wsc.send(JSON.stringify(question));
})

wsc.on("message", function message(data) {
    const text = data.toString();

    console.log(`Respuesta del servidor:`, text);
    
})