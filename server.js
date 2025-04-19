import { WebSocketServer } from "ws";

const optionsWs = {
    port: 8000
}
const wss = new WebSocketServer(optionsWs)

console.log(`Servidor websocket escuchando en`, wss.address());

wss.on("connection", function connection(ws) {
    ws.on('error', console.error);
    
    ws.on("message", function message(data) {
        const text = data.toString();
        const info = JSON.parse(text);
        
        console.log(`Mensaje del cliente:`, info);
        ws.send(`Servidor recibió: ${text}`)
    })

    ws.send(`Conexión exitosa`);
})
