const mongoose = require('mongoose');


// Schemas
const MovieSchema = mongoose.Schema({
    name: String,
    year: Number
})

const UserSchema = mongoose.Schema({
    name: String,
    age: Number
})



const Movie = mongoose.model('movies', MovieSchema)
const User = mongoose.model('User', UserSchema)



const findAll = async() => {
    const movies = await Movie.find((err, movies) => {
        if(err) return console.log(err);
        return movies;
    })

    return movies
}

// teste
const getAllUsers = async() => {
    const users = await User.find((err, users) => {
    if(err) return console.log(err)
        // console.log(newUser)
        return users
    })          
    
    return users;
}


module.exports = {
    findAll,
    getAllUsers,
}
