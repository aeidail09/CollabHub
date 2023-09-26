const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { title } = require('process');
const dotenv = require('dotenv')
const connectDB = require('./config/db.js')

// importing error middleware
const {
  notFound,
  errorHandler
} = require('./middleware/errorMiddleware.js')

// Importing all controllers for posts
const {
  getPosts
} = require('./controller/postsController.js')

// importing all the controllers for user

const {
  authUser,
  registerUser
} = require('./controller/userController.js')


dotenv.config()

// Express app
const app = express();

// Set the views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// sets the audio video resources
app.set()


app.use('/public', express.static('public'));
// Register view engine for dynamic templates on HTML webpages
app.use(express.static("res"));

// Body-parser middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));

console.log("Server started on port: 1000");
console.log("");


// Listen for requests
app.listen(process.env.PORT || 1000);

// connecting to mongoDB
connectDB()

// post routes
app.get('/posts', getPosts)

// loginpage routes
app.get('/login', (req, res) => {
  res.render('Login', { title: 'login' });
});

app.post('/login',authUser)

// homepage routes
app.get('/', (req, res) => {
  res.render('homepage');
});

// registration page route
app.get('/register', (req, res) => {
  res.render('register', { title: 'register' });
});

app.post('/register',registerUser)

// ... your other routes ...

// error route for 404 - Page Not Found
app.get('*', (req, res) => {
  res.status(404).render('404');
});

app.use(errorHandler)
app.use(notFound)
