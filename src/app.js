const express = require('express');
const router = require('./api/routes/routes.js');
const cors = require('cors');
const app = express();
const PORT = 3004;
const mongoose = require('mongoose');

const myMid = (req, res, next) => {
    console.log('foi');
    next();
}

app.use(cors());
// app.use(myMid);

app.use(router);

const DB_CREDENTIALS = {
    user: "mateus",
    pass: "P1EQsxui62xLAsmV",
    db_name: "CRUD"
}

mongoose.connect(
    'mongodb://localhost:17017/tasks',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
.then(() => {
    app.listen(PORT, () => {
        console.log(`API at http://localhost:${PORT}`) 
    });
})
.catch((err) => console.log(err));
