const providerService = require('../services/provider.service');

const obtenerProvedores = async (req, res) => {
    try {
        const usuarios = await providerService.obtenerTodosLosProvedores();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

const obtenerProvedor = async (req, res) => {
    try {
        const usuario = await providerService.obtenerProvedorPorId(req.params.id);
        if (usuario) {
            res.json(usuario);
        } else {
            res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

const crearProvedor = async (req, res) => {
    try {
        const nuevoProveedor = await providerService.crearProvedor(req.body);
        res.status(201).json({
            message: "Proveedor creado",
            provider: nuevoProveedor
        });
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

const actualizarProvedor = async (req, res) => {
    try {
        const proveedorActualizado = await providerService.actualizarProvedor(req.params.id, req.body);
        if (proveedorActualizado) {
            res.status(201).json({
                message: "Proveedor actualizado",
                provider: proveedorActualizado
        })
        } else {
            res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

const eliminarProvedor = async (req, res) => {
    try {
        const proveedor = await providerService.eliminarProvedor(req.params.id);
        if (proveedor) {
            res.json({message: `Se ha borrado el proveedor: ${proveedor.company_name}`});
        } else {
            res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

module.exports = {
    obtenerProvedores,
    obtenerProvedor,
    crearProvedor,
    actualizarProvedor,
    eliminarProvedor
};
