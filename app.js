const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { title } = require('process');

// Express app
const app = express();

// Set the views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// sets the audio video resources
app.set()

// Register view engine for dynamic templates on HTML webpages
app.use(express.static("res"));

// Body-parser middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));

console.log("Server started on port: 1000");
console.log("");

// Listen for requests
app.listen(1000);

// posts route
app.get('/posts', (req, res) => {
  const posts = [
    { title: "Influencer 1", img: '/img/inf1.jpg' },
    { title: "Influencer 2", img: '/img/inf2.jpg' },
    { title: "Influencer 3", img: '/img/inf3.jpg' },
  ];
  res.render('posts', { title: 'Posts', posts: posts }); // Pass the posts data to the template
});

// loginpage routes
app.get('/login', (req, res) => {
  res.render('Login', { title: 'login' });
});

// homepage routes
app.get('/', (req, res) => {
  res.render('homepage');
});

// registration page route
app.get('/register', (req, res) => {
  res.render('register', { title: 'register' });
});

// ... your other routes ...

// error route for 404 - Page Not Found
app.get('*', (req, res) => {
  res.status(404).render('404');
});
