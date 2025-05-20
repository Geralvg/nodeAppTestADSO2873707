const db = require('../models')
const getAllUsers = async ()=>{
    try {
        const users = await db.User.findAll();
        return users;
    } catch (error) {
        throw new Error('Error al obtener los usuarios'+error.message);
    }
}

const getUserById = async (id)=>{
    try {
        const user = await db.User.findByPk(id);
        return user;
    } catch (error) {
        throw new Error('Error al obtener el usuario'+error.message);
    }
}

const createUser = async (name, email, password)=>{
    try {
        const user = await db.User.create({
            name,
            email,
            password
        });
        return user;
    } catch (error) {
        throw new Error('Error al crear el usuario'+error.message);
    }
}

const updateUser = async (id, name, email, password)=>{
    try {
        const user = await db.User.update(
            {
                name,
                email,
                password
            },
            {
                where: {id}
            }
        );
        return user;
    } catch (error) {
        throw new Error('Error al actualizar el usuario'+error.message);
    }
}

const deleteUser = async (id)=>{
    try {
        const user = await db.User.destroy({
            where: {id}
        });
        return user;
    } catch (error) {
        throw new Error('Error al eliminar el usuario'+error.message);
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}