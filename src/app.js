const express = require('express');
const router = require('./api/routes/routes.js');
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');
app.use(router);



const UserSchema = mongoose.Schema({
    name: String,
    age: Number
})
const User = mongoose.model('User', UserSchema)

const newUser = new User({ name: "Mateus", age: 21})
newUser.save((err) => {
    if(err) return console.log(err);
    return console.log("New User added")
})

User.find((err) => {
    if(err) return console.log(err)
    console.log(newUser)
})
















mongoose.connect(
    'mongodb://127.0.0.1:17017/',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
.then(() => {
    app.listen(PORT, () => {
        console.log(`API at http://localhost:3000`) 
    });
})
.catch((err) => console.log(err))


