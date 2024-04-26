const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const {Server} = require("socket.io")
const io = new Server(server)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/index.html');
  });

const users = {}

io.on("connection", (socket, name) => {
    socket.on("new-user-joined", name => {
        console.log(`New user : ${name}`)
        users[socket.id] = name
        console.log(users)
    })
    

    socket.on("disconnect", () => {
        // console.log("user disconnected")
    })
    socket.on("chat message",(msg) => {
        io.emit("chat message", {message: msg, name:users[socket.id]})
        console.log(`message: ${msg}`)
    } )

})

server.listen(3000, () => {
  console.log('listening on localhost:3000');
});