const mongoose = require('mongoose');
require('../config/db_mongo'); // Conexión a BBDD MongoDB

// Esquema
const provSchema = {
    company_name: { 
        type: String, 
        required: true,
        unique: true 
    },
    CIF: {
        type: String,
        required: true,
        unique: true,
    },
    address:{
        type: String,
        required: true,
    },
    url_web:{
        type: String,
        required: true,
    }
};

// Crear el esquema y modelo
const providerSchema = mongoose.Schema(provSchema);
const Provider = mongoose.model('Providers', providerSchema);

module.exports = Provider;


/* // Insertar un proveedor
const p = new Provider({
    companyName: "La casa de las flores",
    website: "https://www.lacasadelasflores.com",
    image:"https://www.lacasadelasflores.com/imagen.jpg"
});

// Guardar en la BBDD
p.save()
.then((data)=>console.log(data))
.catch(err=>console.log(err))

// Insertar otro proveedor
const p2 = new Provider({
    companyName: "La casa de las plantas",
    website: "https://www.lacasadelasplantas.com",
    image:"https://www.lacasadelasplantas.com/imagen.jpg"
});

// Guardar en la BBDD
p2.save()
.then((data)=>console.log(data)) */