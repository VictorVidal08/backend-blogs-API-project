const express = require('express');

const routes = require('./database/routes');

const app = express();

app.use(express.json());

app.use('/login', routes.loginRouter);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
