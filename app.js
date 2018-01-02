var app = require('./config/server');

var server = app.listen(5050, function () {
    console.log("Servidor Online");
});

var io = require('socket.io').listen(server);

app.set('io', io);

/*Criar uma conexão com websocket*/
io.on('connection', function (socket) {
    console.log('conectou no IO');

    socket.on('disconnect', function () {
        console.log('usuario desconectou');
    });

    socket.on('msgParaServidor', function (data) {
        /*dialogo*/
        socket.emit('msgParaCliente', {
            apelido: data.apelido,
            msg: data.mensagem,
            dataHora: data.dataHora,
            corTexto: data.corTexto,
            corFundo: data.corFundo,
        });

        socket.broadcast.emit('msgParaCliente', {
            apelido: data.apelido,
            msg: data.mensagem,
            dataHora: data.dataHora,
            corTexto: data.corTexto,
            corFundo: data.corFundo,
        });
        
    });
    socket.on('msgParaServidorParticipante', function (data) {
        
        /*participantes*/
        socket.emit('participantesParaCliente', {
            apelido: data.apelido,
            corTexto: data.corTexto,
            corFundo: data.corFundo,
        });

        socket.broadcast.emit('participantesParaCliente', {
            apelido: data.apelido,
            corTexto: data.corTexto,
            corFundo: data.corFundo,
        });
    });
});