const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
//db
require('./db/mongoose');
//routes
const apiRouter = require('./routes/api');
//parser application/json
app.use(bodyParser.json());

app.use(cors())

app.use('/api/', apiRouter)

app.listen(3001,(req,res) => {
    console.log("serwer slucha");
})