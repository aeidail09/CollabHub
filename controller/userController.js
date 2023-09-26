const asyncHandler = require("../middleware/asyncHandler.js")
const User = require('../models/userModel.js')
const generateToken = require("../utils/generateToken.js")


// login req &get token
// POST req
const authUser = asyncHandler(async(req, res) => {
    const  email = req.body.email
    const password = req.body.password
    const user = await User.findOne({email})

    if(user && (await user.matchPassword(password))) {
        generateToken(res, user._id)

        res.status(200).json({
            _id: user._id,
            email: user.email,
        })
    } else {
        res.status(401)
        throw new Error("Invalid email or password")
    }
})

// register user
// POST req
const registerUser = asyncHandler(async(req, res) => {
    const email  = req.body.email
    const  password  = req.body.password
    console.log(email)

    const userExists = await User.findOne({ email })

    if(userExists) {
        res.status(400)
        throw newError('User already exist')
    }

    const user = await User.create({
        email,
        password
    })

    if(user) {
        generateToken(res, user._id)
        res.status(200).json({
            name: user.name,
            email: user.email,
        }) 
        return res.redirect('/')
    } else {
        res.status(400)
        throw new Error('Invalid User data');
    }
})

module.exports = {
    authUser,
    registerUser
}