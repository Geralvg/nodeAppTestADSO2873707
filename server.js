//Llamado e Inicializacion de Dependencias
const express = require('express'); // se incluye el franwork express
const morgan = require('morgan'); //se incluye el middleware morgan para el log de peticiones
const bodyParser = require('body-parser'); //se incluye el middleware body-parser para el parseo de datos
const app = express(); //instancia de Express

//Configuraciones
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config(); //se carga el archivo .env
}
app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(morgan('combined')); //se usa el middleware morgan para el log de peticiones
app.use(bodyParser.urlencoded({extended : false})); //para recibir datos por POST
app.use(bodyParser.json()); //para recibir formato json


//Routes
// app.use('/api/users', require('./api/users')); //se incluye el router de usuarios

//Configuracionn de rutas del API
app.use('/api/v1/users', require('./api/v1/routes/users.routes')); //se incluye el router de usuarios v1
app.use('/api/v1/articles', require('./api/v1/routes/articles.routes'));
app.use('/api/v1/categories', require('./api/v1/routes/categories.routes'));

// app.get('/', (req, res)=>{
//     res.send({
//         status : 200,
//         message : 'Hello API - NodeJs'
//     });
// });
// app.post('/testNewUser',(req,res)=>{
//     console.log(req.body);
//     // const nombre = req.body.nombre;
//     // const email = req.body.email;
//     // const direccion = req.body.direccion;
//     // const empresa = req.body.empresa;
//     const { nombre, email, direccion, empresa } = req.body;
//     console.log(`Nombre: ${nombre}`);
//     console.log(`Email: ${email}`);
//     console.log(`Direccion: ${direccion}`);
//     console.log(`Empresa: ${empresa}`);
//     res.send({
//         status : 200,
//         message : 'Usuario creado exitosamente'
//     });
    
// });

// app.get('/saludos', (req, res)=>{
//     res.send({
//         status : 200,
//         message : 'Hola, desde NodeJs'
//     });
// });

//Se incia el servidor en el puesto 4000
app.listen(app.get('port'),()=>{
    console.log(`server running on port ${app.get('port')}  😜😉`);
});