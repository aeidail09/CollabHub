const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')


const userSchema = new mongoose.Schema({
    email:{
        type: String,
    },
    password: {
        type: String,
    }
})

userSchema.methods.matchPassword = async function (enteredPassword) {
    return enteredPassword === this.password
}

// userSchema.pre('save', async function(next) {
//     if(!this.isModified('password')){
//         next()
//     } 

//     const salt = await bcrypt.genSalt(10)
//     this.password = await bcrypt.hash(this.password, salt)
// })

const User = mongoose.model("User", userSchema)

module.exports = User
