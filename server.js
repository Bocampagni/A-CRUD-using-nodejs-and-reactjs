const express = require('express');

const app = express();

app.get('/', (request, response) => {
    response.send("Cares Cares Cares!!!!");
} )

app.listen(3001);