const express = require('express');
require("dotenv").config();

const app = express();

const port = process.env.APP_PORT;

// Middleware qui permet de traiter les données de la Request (.REQ)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", require("./routes/api.routes"));

// Lancer le serveur //
app
    .listen(port, () => {
        console.info(`Server is listening on port ${port}`);
    })
    .on("error", (err) => {
        console.error("Error:", err.message);
    });