//Enlazamos el servicio(capa) de usuario
const userService = require('../services/userService'); //se importa el controlador de usuarios

const getAllUsers = async (req, res)=>{
    const allUsers = await userService.getAllUsers();
    if (allUsers) {
        res.status(200).send({status: "OK", data: allUsers});
    }else{
        res.status(400).send({status: "ERROR", message: null});
    }
    
};

const getUserById = async(req,res)=>{
    const id = req.params.id;
    const user = await userService.getUserById(id);
    if (user) {
        res.status(200).send({status: "OK", data: user});

    }else{
        res.status(400).send({status: "ERROR", message: null});
    }
}

const createUser = async(req,res)=>{
    const {body} = req;
    const createUser = await userService.createUser(body.name, body.email, body.password);
    if (createUser) {
        res.status(201).send({status: "OK", data: createUser});
    }else{
        res.status(400).send({status: "ERROR", data: createUser});
    }
}
const updateUser = async(req,res)=>{
    let id = req.params.id;
    
    let {name, email, password} = req.body;
    
    const updateUser = await userService.updateUser(id, name, email, password);
    if (updateUser) {
        res.status(200).send({status: "OK", data: updateUser});
    }else{
        res.status(400).send({status: "ERROR", data: updateUser});
    }
}

const deleteUser = async(req,res)=>{
    let id = req.params.id;
    const deleteUser = await userService.deleteUser(id);
    if (deleteUser) {
        res.status(200).send({status: "OK", data: deleteUser});
    }else{
        res.status(400).send({status: "ERROR", data: deleteUser});
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};