// Import express
var express = require('express')
//Import Body Parser
var bodyParser = require('body-parser');
var cors = require('cors'); //para securizar la app //securizar
// Initialize the server express
var app = express();

//conectar BD
//var urlBD = 'mongodb://localhost/pelis';
var urlBD = 'mongodb+srv://ratita:uade123@cluster0-ntyc3.mongodb.net/test?retryWrites=true'
//opciones conexion
var opts = {useNewUrlParser : true, connectTimeoutMS:20000};
//importo driver
var mongoose = require('mongoose');
//Pruebo conexion
mongoose.connect(urlBD,opts).then
(
    () => {
            console.log("Conectado!!");
          }, //se conecto
    err => { 
            console.log("ERROR:" + err); 
           } //manejo error
);

// Import router
var apiRoutes = require("./api-routes")


// Todo lo que recibe la app se tratara como json
app.use(bodyParser.urlencoded(
{
    extended: true
}));
app.use(bodyParser.json());
app.use(cors()); //securizar


// Setup server port
var port = process.env.PORT || 8081;

// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express Roomer!'));

// Use Api routes in the App
app.use('/apd', apiRoutes);

// Launch app to listen to specified port
app.listen(port, function () {
     console.log("Running RestHub on port " + port);
});

