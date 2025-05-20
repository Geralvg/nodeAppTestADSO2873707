const db = require('../../../models');
const {Router} = require('express'); //Destructuracion
// Se crea el router
const router = Router();
const UserController = require('../../../controllers/userController'); //se importa el controlador de usuarios

router.get('/testUserAPI',(req,res)=>{
    res.send({
        "status": 200,
        "message" : "Hello from users"
    });
});

//rutas del usuario con los verbos HTTP
router.get('/', UserController.getAllUsers);
router.get('/:id', UserController.getUserById);
router.post('/', UserController.createUser);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);
module.exports= router;