let port = 15551

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/powerpoint.html', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

http.listen(port, "0.0.0.0",  function(){
    console.log('listening on *:' + port);
});

var ks = require('node-key-sender');
ks.setOption('startDelayMillisec', 0);
ks.setOption('globalDelayPressMillisec', 0);

io.on('connection', function(socket) {
    console.log("Client connected")

    socket.on('keydown', function(key){
        console.log('message: ' + key);

        if (key === 37) {
            ks.sendKey("Left");
        }

        if (key === 39) {
            ks.sendKey("Right");
        }
    });

    socket.on("*",function(event,data) {
        console.log("unrecognized message", event, ", data:", data);
    });
});

