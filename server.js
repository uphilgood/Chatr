const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const socket = require('socket.io');
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// Start the API server
const server = app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

const io = socket(server);

io.on('connection', (socket) => {
    console.log(socket.id);

    socket.on('SEND_MESSAGE', function(data){
        io.emit('RECEIVE_MESSAGE', data);
    })
});


var nsp = io.of('/chat2');
nsp.on('connection', function(socket){
    console.log('someone entered Chatroom2');

    socket.on('disconnect', function(){
        console.log('user disconnected from Chatroom2');
    });

    //recieving and emitting message to all clients in namespace /support
    socket.on('SEND_MESSAGE', function(data){
        console.log('message received: ' + data);
        io.of('/chat2').emit('RECEIVE_MESSAGE', data);
    });
});

var nsp2 = io.of('/chat3');
nsp2.on('connection', function(socket){
    console.log('someone entered Chatroom3');

    socket.on('disconnect', function(){
        console.log('user disconnected from Chatroom3');
    });

    //recieving and emitting message to all clients in namespace /support
    socket.on('SEND_MESSAGE', function(data){
        console.log('message received: ' + data);
        io.of('/chat3').emit('RECEIVE_MESSAGE', data);
    });
});

var nsp3 = io.of('/chat4');
nsp3.on('connection', function(socket){
    console.log('someone entered Chatroom4');

    socket.on('disconnect', function(){
        console.log('user disconnected from Chatroom4');
    });

    //recieving and emitting message to all clients in namespace /support
    socket.on('SEND_MESSAGE', function(data){
        console.log('message received: ' + data);
        io.of('/chat4').emit('RECEIVE_MESSAGE', data);
    });
});

var nsp4 = io.of('/chat5');
nsp4.on('connection', function(socket){
    console.log('someone entered Chatroom5');

    socket.on('disconnect', function(){
        console.log('user disconnected from Chatroom5');
    });

    //recieving and emitting message to all clients in namespace /support
    socket.on('SEND_MESSAGE', function(data){
        console.log('message received: ' + data);
        io.of('/chat5').emit('RECEIVE_MESSAGE', data);
    });
});

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/chatr");











