const express = require("express"); // Importamos el paquete express
const app = express(); // Inciializar servidor con express

// const port = 3000; // Puerto a usar por el servidor

// Importar middlewares
const manage404 = require("./middlewares/manage404");
const morgan = require("./middlewares/morgan");

// Logger
app.use(morgan(':method :url :status :param[id] - :response-time ms :body'));

app.use(express.json()); // Middleware para parsear el body de las peticiones

// Rutas
const productsRoutes = require("./routes/products.routes")
const providerRoutes = require("./routes/provider.routes")

// GET http://localhost:3000/ --> Ruta /. La principal
app.get("/", (req, res) => {
  // req: request, res: response
  res.send("Hello World!. Welcome to Backend");
});

// Rutas a habilitar
//API
app.use('/api/products',productsRoutes);
app.use('/api/providers',providerRoutes);

// Para ruta no existente
app.use("*", manage404);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
