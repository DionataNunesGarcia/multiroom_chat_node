var app = require('./config/server');

var server = app.listen(5050, function(){
	console.log("Servidor Online");
});

var io = require('socket.io').listen(server);

app.set('io', io);

/*Criar uma conexão com websocket*/
io.on('connection', function(socket){
	console.log('conectou no IO');

	socket.on('disconnect', function(){
		console.log('usuario desconectou');		
	})
});