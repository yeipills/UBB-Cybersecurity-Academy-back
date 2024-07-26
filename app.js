const express = require("express");
const app = express();
const apiRoutes = require("./src/api/routes/api");
const bodyParser = require("body-parser");
const passport = require("passport");
const session = require("express-session");
const logger = require("./src/api/middleware/logger");
const cors = require("cors");

// Configurar CORS
app.use(
  cors({
    origin: "*", // Permitir cualquier origen. Ajusta esto según tus necesidades de seguridad.
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Configurar middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: "SECRET", resave: false, saveUninitialized: true }));

// Inicializar passport
app.use(passport.initialize());
app.use(passport.session());

// Logger middleware
app.use(logger);

// Usar rutas de API
app.use("/api", apiRoutes);

// Exportar la app de Express
module.exports = app;
