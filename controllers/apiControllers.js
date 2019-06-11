var Contactos = require('../models/ContactoModel');

//agrego el controlador de Pelis
var Pelis = require('../models/PeliModel');
const fetch = require('node-fetch');
//agrego el controlador de Usuarios
var Usuarios = require('../models/UserModel');
var Filtros = require('../models/FiltrosModel');
var Likes = require('../models/LikesModel');
var Match = require('../models/MatchModel');

const url = "http://www.omdbapi.com/?apikey=d0b64143&";

//metodos de Usuario
let getUsuarios = (req, res) => {
    console.log("llegue a leer usuarios");
    //Listar resultados
    Usuarios.find()
        .then
        (
            (listaUsuarios) => {
                res.send(listaUsuarios); //devuelvo resultado query       
            },
            (err) => { console.log(err); }
        )
};

let getUsuariosPorToken = (req, res) => {
    console.log("llegue a leer usuarios por token");
    //Listar resultados
    let token = req.query.token;
    console.log(token);
    Usuarios.find({token: token})

        .then
        (
            (listaUsuarios) => {
                res.send(listaUsuarios); //devuelvo resultado query       
            },
            (err) => { console.log(err); }
        )
};


let insertUsuario = (req, res) => {
    console.log(req.body);
    var newUsuario = Usuarios({
        token: req.body.token,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        sexo: req.body.sexo,
        edad: req.body.edad,
        dni: req.body.dni,
        telefono: req.body.telefono,
        codArea: req.body.codArea,
        foto: req.body.foto,
        descripcion: req.body.descripcion
    });
    newUsuario.save().
        then
        (
            (newUsuario) => {
                res.send(newUsuario); //devuelvo resultado query       
            },
            (err) => { console.log(err); }
        )
}

let buscarUsuario = (req, res) => {

    console.log(req.body);
    var validado = "";
    console.log("entro a validar");
    Usuarios.findOne({ usrId: req.body.usrId, password: req.body.password })
        .then(
            (userEncontrado) => {
                if (userEncontrado === null) {
                    validado = false;
                    res.status(400).send(validado)
                    console.log(validado);
                    return
                }
                validado = true;
                res.send(validado); //devuelvo resultado query
                console.log(validado);
            }/*,
        (err)=>{console.log(err);}*/
        )
}

//metodos Filtros
let getFiltros = (req, res) => {
    console.log("llegue a leer Filtros");
    //Listar resultados
    Filtros.find()
        .then
        (
            (listaFiltros) => {
                res.send(listaFiltros); //devuelvo resultado query       
            },
            (err) => { console.log(err); }
        )
};

let insertFiltro = (req, res) => {
    console.log(req.body);
    console.log("llegue a insertar Filtros");
    var newFiltro = Filtros({
        token: req.body.token,
        barrio: req.body.barrio,
        dineroMin: req.body.dineroMin,
        dineroMax: req.body.dineroMax,
        edadMin: req.body.edadMin,
        edadMax: req.body.edadMax,
        sexo: req.body.sexo
    });
    newFiltro.save().
        then
        (
            (newFiltro) => {
                res.send(newFiltro); //devuelvo resultado query       
            },
            (err) => { console.log(err); }
        )
}

//metodos Likes
let getLikes = (req, res) => {
    console.log("llegue a leer Likes");
    //Listar resultados
    Likes.find()
        .then
        (
            (listaLikes) => {
                res.send(listaLikes); //devuelvo resultado query       
            },
            (err) => { console.log(err); }
        )
};

let insertLike = (req, res) => {
    console.log(req.body);
    console.log("llegue a insertar Like");
    var newLike = Likes({
        token: req.body.token,
        like: req.body.like
    });
    newLike.save().
        then
        (
            (newLike) => {
                res.send(newLike); //devuelvo resultado query       
            },
            (err) => { console.log(err); }
        )
}

//metodos Match
let getMatch = (req, res) => {
    console.log("llegue a leer Match");
    //Listar resultados
    Match.find()
        .then
        (
            (listaMatch) => {
                res.send(listaMatch); //devuelvo resultado query       
            },
            (err) => { console.log(err); }
        )
};

let insertMatch = (req, res) => {
    console.log(req.body);
    console.log("llegue a insertar Match");
    var newMatch = Match({
        token: req.body.token,
        match: req.body.match
    });
    newMatch.save().
        then
        (
            (newMatch) => {
                res.send(newMatch); //devuelvo resultado query       
            },
            (err) => { console.log(err); }
        )
}


//para mostrar por Id
let getPelisPorId = (req, res) => {
    console.log(req.body);
    var validado = "";
    let id = req.query.id;

    console.log("entro a buscar por peliId");
    //Pelis.findOne({peliId : req.body.peliId})
    Pelis.find({ peliId: id })
        .then
        (
            (listaPelis) => {
                res.send(listaPelis); //devuelvo resultado query       
            },
            (err) => { console.log(err); }
        )

}



let buscarPorUsuarioId = (req, res) => {
    console.log(req.body);
    console.log("entro a buscar por usrId");
    Pelis.find({ usrId: req.body.usrId })
        .then
        (
            (listaUsuarios) => {
                res.send(listaUsuarios); //devuelvo resultado query       
            },
            (err) => { console.log(err); }
        )
}
let getPelisPorUsuarioId = (req, res) => {
    //console.log(req.body);
    console.log("entro a buscar por usrId");
    let id = req.query.id;
    Pelis.find({ usrId: id })
    .then(
            (pelisPorUsuario) => {
                let peliculas = [];

                const promise1 = new Promise(function(resolve, reject) {
                    pelisPorUsuario.forEach((movie, index) => {
                    let cant = 0;
                    let suma = 0;
                    Pelis.find({ peliId: movie.peliId }).then((ratings) => {
                        cant = ratings.length;
                        ratings.forEach((rating) => {
                            suma += rating.rating
                        })
                        const endpoint = `${url}i=${movie.peliId}`;
                        fetch(endpoint
                        ).then((response) => {
                            return response.json();
                        })
                        .then(responseData => {
                            let result = responseData
                            result.Prom = suma / cant;
                            peliculas.push(result)
                            //console.log(result)
                            console.log(movie)
                            console.log("pelis1 " + peliculas)
                            console.log("movie " + movie)
                            console.log("index2 " + index)
                           if (1 === index) {
                               resolve()
                           }
                        })
                    })
                })});

                promise1.then(()=>{
                    console.log("pelis2 " + peliculas)
                    res.send(peliculas); //devuelvo resultado query 
                })    
                
                //res.send(peliculas); //devuelvo resultado query  

            },
            (err) => { console.log(err); }
        )
}

let getPelis = (req, res) => {
    console.log("llegue a leer");
    //Listar resultados
    Pelis.find()
        .then(
            (listaPelis) => {
                res.send(listaPelis); //devuelvo resultado query       
            },
            (err) => { console.log(err); }
        )
};

let insertPeli = (req, res) => {
    console.log(req.body);
    var newPeli = Pelis({
        peliId: req.body.peliId,
        titulo: req.body.titulo,
        comentario: req.body.comentario,
        rating: req.body.rating,
        imgUrl: req.body.imgUrl,
        usrId: req.body.usrId
    });
    newPeli.save().
        then
        (
            (newPeli) => {
                res.send(newPeli); //devuelvo resultado query       
            },
            (err) => { console.log(err); }
        )
}

//module.exports = {getContactos,insertContacto,updateContacto,deleteContacto,getPelis,insertPeli};
module.exports = {
    getUsuarios,
    insertUsuario,
    buscarUsuario,
    getPelis,
    insertPeli,
    getPelisPorId,
    getPelisPorUsuarioId,
    getFiltros,
    insertFiltro,
    getLikes,
    insertLike,
    getMatch,
    insertMatch,
    getUsuariosPorToken,
};


/*
let getContactos = (req, res) =>
{
    console.log("llegue a leer");
    //Listar resultados
    Contactos.find()
    .then
    (
        (listaContactos)=>
        {
            res.send(listaContactos); //devuelvo resultado query
        },
        (err)=>{console.log(err);}
    )
};

let insertContacto = (req,res) =>
{
    console.log(req.body);
    var newContacto = Contactos({
        nombre: req.body.nombre,
        //domicilio: req.body.domicilio,
        //cumpleaños: req.body.cumple,
        dni: req.body.dni,
        mail: req.body.mail
    });
    newContacto.save().
    then
    (
        (newContacto)=>
        {
            res.send(newContacto); //devuelvo resultado query
        },
        (err)=>{console.log(err);}
    )
}

let updateContacto = (req,res) =>
{
    let id = { dni : req.body.dniBuscado};
    let newContacto = Contactos({
        nombre: req.body.newData.nombre,

    });
    console.log(id);
    console.log(newContacto);
    Contactos.findOneAndUpdate(id,newContacto,function(err, todo)
    {
        (err)=>{console.log(err);}
        (newContacto)=>
        {
            res.send(newContacto); //devuelvo resultado query
        };

    });
}

let deleteContacto = (req,res)=>
{
    let id = { dni : req.body.dniEliminado};
    Contactos.deleteOne(id)
    .then
    (
        (resultado)=>
        {
            res.send(resultado); //devuelvo resultado
        },
        (err)=>{console.log(err);}
    )

}
 */