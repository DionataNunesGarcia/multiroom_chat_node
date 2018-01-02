module.exports.dataHora = function() {
    var data = new Date();
    
    return data.toISOString().substr(0, 10).split('-').reverse().join('/') + ' ' + data.toLocaleTimeString();
};

module.exports.data = function() {
    var data = new Date();
    
    return data.toISOString().substr(0, 10).split('-').reverse().join('/');
};

module.exports.formataDataHora = function(date) {
    var data = new Date(date),
            dia = data.getDate(),
            mes = data.getMonth() + 1,
            ano = data.getFullYear(),
            hora = data.getHours(),
            minutos = data.getMinutes(),
            segundos = data.getSeconds();
    
    return [dia, mes, ano].join('/') + ' ' + [hora, minutos, segundos].join(':');
};

module.exports.formataData = function(date) {
    var data = new Date(date),
            dia = data.getDate(),
            mes = data.getMonth() + 1,
            ano = data.getFullYear();
    
    return [dia, mes, ano].join('/');
};

module.exports.corTexto = function(hexcolor) {
    
    var r = parseInt(hexcolor.substr(1,2),16);
    var g = parseInt(hexcolor.substr(3,2),16);
    var b = parseInt(hexcolor.substr(4,2),16);
    var yiq = ((r*299)+(g*587)+(b*114))/1000;
    
    // Return new color if to dark, else return the original
    console.log('tamanho da cor: ' + yiq);
    return (yiq < 90) ? 'escuro' : 'claro';
};