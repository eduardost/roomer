// Initialize express router
let router = require('express').Router();
let apiController = require('./controllers/apiControllers');
//let apiControllerPeli = require('./controllers/apiControllersPelis');
       
    

// Set default API response
router.get('/', function (req, res) 
{
    res.json(
    {
       status: 'API Its Working',
       message: 'Welcome to RESTHub crafted with love!',
    });
});

//EndPoint para leer toda la base
router.get('/leerAgenda',function(req,res)
{
    console.log("leer");
    apiController.getContactos(req,res);
});
//EndPoint para leer toda la base
router.get('/leerPeli',function(req,res)
{
    console.log("leer");
    apiController.getPelis(req,res);
});

//EndPoint para insertar en la BD
router.post('/insertContacto/Contacto',function(req,res)
{
    console.log(req.body);
    apiController.insertContacto(req,res);
});
//agrego EndPoint para pelis
//EndPoint para insertar en la BD
router.post('/insertPeli/Peli',function(req,res)
{
    console.log(req.body);
    apiController.insertPeli(req,res);
});


//EndPoint para modificar en la BD
router.post('/updateContacto/Contacto',function(req,res)
{
    apiController.updateContacto(req,res);
});

//EndPoint para eliminar en la BD
router.delete('/deleteContacto/Contacto',function(req,res)
{
    apiController.deleteContacto(req,res);
});

//agrego EndPoint para insertar usuario
router.post('/insertUsuario',function(req,res)
{
    console.log(req.body);
    apiController.insertUsuario(req,res);
});

//agrego EndPoint para buscar en la base
router.post('/buscarUsuario',function(req,res) {
    apiController.buscarUsuario(req,res);
});

//EndPoint para leer toda la base de usuarios
router.get('/getUsuarios',function(req,res)
{
    console.log("getUsuarios");
    apiController.getUsuarios(req,res);
});

//EndPoint para buscar por peliId
router.get('/getPelisPorId',function(req,res)
{
    console.log("leer");
    apiController.getPelisPorId(req,res);
});

//EndPoint para buscar por usrId
router.get('/getPelisPorUsuarioId',function(req,res)
{
    console.log("leer getPelisPorUsuarioId");
    apiController.getPelisPorUsuarioId(req,res);
});


//EndPoint para leer Filtros
router.get('/getFiltros',function(req,res)
{
    console.log("getFiltros");
    apiController.getFiltros(req,res);
});
//agrego EndPoint para insertar Filtro
router.post('/insertFiltro',function(req,res)
{
    console.log(req.body);
    apiController.insertFiltro(req,res);
});

//EndPoint para leer Likes
router.get('/getLikes',function(req,res)
{
    console.log("getLikes");
    apiController.getLikes(req,res);
});
//agrego EndPoint para insertar Like
router.post('/insertLike',function(req,res)
{
    console.log(req.body);
    apiController.insertLike(req,res);
});


//EndPoint para leer Match
router.get('/getMatch',function(req,res)
{
    console.log("getMatch");
    apiController.getMatch(req,res);
});
//agrego EndPoint para insertar Match
router.post('/insertMatch',function(req,res)
{
    console.log(req.body);
    apiController.insertMatch(req,res);
});


//EndPoint para leer toda la base de usuarios
router.get('/getUsuariosPorToken',function(req,res)
{
    console.log("leer");
    apiController.getUsuariosPorToken(req,res);
});

//EndPoint para leer toda la base de usuarios
router.get('/getLikesPorToken',function(req,res)
{
    console.log("leer");
    apiController.getLikesPorToken(req,res);
});


//EndPoint para leer toda la base de usuarios
router.get('/getFiltrosPorToken',function(req,res)
{
    console.log("leer");
    apiController.getFiltrosPorToken(req,res);
});

//EndPoint para leer toda la base de usuarios
router.get('/getMatchPorToken',function(req,res)
{
    console.log("leer");
    apiController.getMatchPorToken(req,res);
});


// Export API routes
module.exports = router;