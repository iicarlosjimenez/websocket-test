const { WebSocketServer } = require("ws");

const questions = require("./questions.json");
const optionsWs = {
    port: 8080
}
const wss = new WebSocketServer(optionsWs)

console.log(`Servidor websocket escuchando en`, wss.address());

wss.on("connection", function connection(ws) {
    ws.on('error', console.error);
    
    ws.on("message", function message(data) {
        const text = data.toString();
        const info = JSON.parse(text);
        const { category, index } = info;
        const question = questions.filter(q => q.category == category)
        
        console.log(`Index:`, index);
        console.log(`Categoría:`, category);
        console.log(`Pregunta:`, question);

        ws.send(`Servidor recibió: ${text}`)
    })

    ws.send(`Conexión exitosa`);
})
