module.exports.iniciaChat = function(application, req, res){

	var dados = req.body;

	req.assert('apelido', 'Nome ou apelido não pode ser vázio. ').notEmpty();
	req.assert('apelido', 'Nome ou apelido tem que ter de 3 a 15 caracteres.. ').len(3,15);

	var validacao = req.validationErrors();

	if(validacao){
		res.render('index', {validacao : validacao});
		return;
	}

	application.get('io').emit('msgParaCliente', {apelido : dados.apelido, msg : ' se conectou'});

	res.render('chat');
}