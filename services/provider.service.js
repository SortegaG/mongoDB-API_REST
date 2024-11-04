const User = require('../models/provider.model');

const obtenerTodosLosProvedores = async () => {
    return await User.find();
};

const obtenerProvedorPorId = async (id) => {
    return await User.findById(id);
};

const crearProvedor = async (datosUsuario) => {
    const user = new User(datosUsuario);
    return await user.save();
};

const actualizarProvedor = async (id, datosUsuario) => {
    return await User.findByIdAndUpdate(id, datosUsuario, { new: true });
};

const eliminarProvedor = async (id) => {
    return await User.findByIdAndDelete(id);
};

module.exports = {
    obtenerTodosLosProvedores,
    obtenerProvedorPorId,
    crearProvedor,
    actualizarProvedor,
    eliminarProvedor
};