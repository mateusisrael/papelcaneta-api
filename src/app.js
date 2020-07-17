const express = require('express');
const router = require('./api/routes/routes.js');
const app = express();
const PORT = 3000;




app.use(router);

app.listen(PORT, () => {
    console.log(`API at http://localhost:3000`) 
});
