const User = require('./models/userModel.js')
const connectDB = require('./config/db.js')
const dotenv = require('dotenv')


dotenv.config()


const destroyData = async () => {
    try {
        await User.deleteMany()

        console.log('Data Destroyed')
        process.exit()
    } catch (error) {
        console.error(`${error}`)
        process.exit(1)
    }
}

destroyData()