const express = require('express');
const mongoose = require('mongoose')
const requireDir = require('require-dir');

//inciando o app
const app = express();
app.use(express.json());


//iniciando o db
mongoose.connect('mongodb://localhost:27017/nodeapi', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.set('useFindAndModify', false);
requireDir('./src/models');


//Rotas"
app.use('/api', require("./src/routes"));
app.listen(3001);
