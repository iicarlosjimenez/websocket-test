import WebSocket from "ws";

const host = "localhost";
const port = 8000
const wsc = new WebSocket(`ws://${host}:${port}`)

wsc.on('error', console.error);

wsc.on("open", function open() {
    console.log("Conectado al servidor websocket");
    
    wsc.send(JSON.stringify({ tipo: "saludo", mensaje: "Hola desde el cliente!" }));
})

wsc.on("message", function message(data) {
    const text = data.toString();

    console.log(`Respuesta del servidor:`, text);
    
})