const mongoose = require("mongoose");

//mongoose.set('strictQuery', false);
//const DATABASE_URL = "mongodb://localhost:27017/fakeshop";
// mongoose.connect("mongodb://localhost:27017/local", { useNewUrlParser: true, useUnifiedTopology: true});
// https://cloud.mongodb.com/v2/6728fd3944ad3a50800e991c#/clusters link
mongoose.connect("mongodb+srv://SOrtegaG:sortegag@clustersergio.ny22d.mongodb.net/");

const db = mongoose.connection;

// Eventos
db.on("error", error => console.log(error));
db.once("open", () => console.log("connection to MongoDB established"));

module.exports = mongoose;