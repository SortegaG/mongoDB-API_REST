const providerService = require('../services/provider.service');

const obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await providerService.obtenerTodosLosUsuarios();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

const obtenerUsuario = async (req, res) => {
    try {
        const usuario = await providerService.obtenerUsuarioPorId(req.params.id);
        if (usuario) {
            res.json(usuario);
        } else {
            res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

const crearUsuario = async (req, res) => {
    try {
        const nuevoUsuario = await providerService.crearUsuario(req.body);
        res.status(201).json(nuevoUsuario);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

const actualizarUsuario = async (req, res) => {
    try {
        const usuarioActualizado = await providerService.actualizarUsuario(req.params.id, req.body);
        if (usuarioActualizado) {
            res.json(usuarioActualizado);
        } else {
            res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

const eliminarUsuario = async (req, res) => {
    try {
        const usuario = await providerService.eliminarUsuario(req.params.id);
        if (usuario) {
            res.json({ mensaje: 'Usuario eliminado' });
        } else {
            res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

module.exports = {
    obtenerUsuarios,
    obtenerUsuario,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario
};