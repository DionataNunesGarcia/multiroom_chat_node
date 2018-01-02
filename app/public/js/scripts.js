function dataHora(){
    var data = new Date();
    
    return data.toISOString().substr(0, 10).split('-').reverse().join('/') + ' ' + data.toLocaleTimeString();
};

function data() {
    var data = new Date();
    
    return data.toISOString().substr(0, 10).split('-').reverse().join('/');
};