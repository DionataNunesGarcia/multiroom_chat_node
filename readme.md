#Chat em Node-JS com Socket IO

/*Importar o modulo do servidor expres*/
var express = require("express");

/*Importar o modulo do consign*/
var consign = require("consign");

/*Importar o modulo do bodyParser*/
var bodyParser = require("body-parser");

/*Importar o modulo do express-validator*/
var expressValidator = require("express-validator");

/*Iniciar o objeto do express*/
var app = express();

/*setar as variaveis VIEW ENGINE e VIEWS do Express*/
app.set('view engine', 'ejs');
app.set('views', './app/views');

/*configurar o middleware express static*/
app.use(express.static('./app/public'));

/*configurar o middleware express static*/
app.use(bodyParser.urlencoded({extended: true}));

/*configurar o middleware express static*/
app.use(expressValidator());

/*Efetua o autoload das rotas, dos models e dos controllers para o objeto app*/
consign()
	.include('app/routes')
	.then('app/models')
	.then('app/controllers')
	.into(app);

// exportar o objeto app
module.exports = app;
