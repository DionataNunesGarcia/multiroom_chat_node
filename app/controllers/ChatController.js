module.exports.iniciaChat = function (application, req, res) {

    var dados = req.body;

    req.assert('apelido', 'Nome ou apelido não pode ser vázio. ').notEmpty();
    req.assert('apelido', 'Nome ou apelido tem que ter de 3 a 15 caracteres.. ').len(3, 15);

    var validacao = req.validationErrors();

    if (validacao) {
        res.render('index', {validacao: validacao, dados: dados});
        return;
    }
    
    var dataHora = application.app.functions.util.dataHora();
    
    var corTexto = application.app.functions.util.corTexto(dados.cor);
    
    application.get('io').emit(
        'msgParaCliente',{
            apelido: dados.apelido, 
            msg: ' acabou de entrar no chat',
            dataHora: dataHora,
            corFundo: dados.cor,
            corTexto: corTexto
        }
    );

    res.render('chat', {
        apelido: dados.apelido, 
        dataHora : dataHora, 
        corFundo: dados.cor, 
        corTexto: corTexto
    });
};