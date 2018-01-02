module.exports.home = function(application, req, res){
    res.render('index', {validacao: {}, dados: {apelido: '', cor: '#D8F0FE'}});
};