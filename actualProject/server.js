const express = require('express');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');
const passport = require('passport');

// Load routes!
const users = require('./routes/api/users');
const posts = require('./routes/api/posts');
const dashboard = require('./routes/api/dashboard');

// Load important keys and configurations
const keys = require('./config/keys');
// Fix the keys file.
const db = require('./config/keys').mongoURI;

// Initialize our application <3
const app = express();


// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Passport middleware
app.use(passport.initialize());

// Passport Configuration
require('./config/passport.js')(passport);

// Connect to the database
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => {
        console.log("MongoDB connected!");
    })
    .catch(err => console.log(err));

// Handlebars Middleware 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Use Routes
app.use('/api/users', users);
app.use('/api/posts', posts);
app.use('/api/dashboard', dashboard);

// Static Folder
app.use(express.static(path.join(__dirname, 'public')))

// Method-override Middleware
app.use(methodOverride('_method'));

// Express session middleware
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))

app.get('/', (req, res) => {
    res.render('landing', {withoutAuth: true, homescreenNav: true});
});

app.get('/contact', (req, res) => {
    res.render('contact/contact', {withoutAuth: true, contactPg: true});
});


const PORT = process.env.PORT || 5000;

app.use((req, res, next) => {
    // Global variable declarations go here --->
    res.locals.user = req.user || null;
    next(); 

})


app.listen(PORT, () => {
    console.log(`Server is actively running at: ${PORT}`)
});