const express = require('express');

const PORT = 3000;
const routing = require('./app/routes/index.js');

const app = express();

app.use('/api', routing());

app.listen(PORT, () => console.log(`Listen on port: ${PORT} \nConnection started!`));
