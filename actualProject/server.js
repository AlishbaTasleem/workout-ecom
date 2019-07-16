const express = require('express');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');
const cookieParser = require('cookie-parser');
const MongoStore = require('connect-mongo')(session);
const passport = require('passport');

// Load routes!
const users = require('./routes/api/users');
const posts = require('./routes/api/posts');
const dashboard = require('./routes/api/dashboard');
const settings = require('./routes/api/settings');
const jobs = require('./routes/api/jobs');
const messages = require('./routes/api/messages');

// Load important keys and configurations
const keys = require('./config/keys');
// Fix the keys file.
const db = require('./config/keys').mongoURI;

// Initialize our application <3
const app = express();


// Body parser middleware
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());


// Passport Configuration
require('./config/passport.js')(passport);

// Connect to the database
mongoose
    .connect(db, {
        useNewUrlParser: true
    })
    .then(() => {
        console.log("MongoDB connected!");
    })
    .catch(err => console.log(err));
const mongooseCon = mongoose.connection;

// Handlebars Middleware 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Static Folder
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static('views/images')); 

// Method-override Middleware
app.use(methodOverride('_method'));

// add & configure middleware - express-session
app.use(cookieParser());
app.use(session({
    secret: 'my-secret',
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({
        mongooseConnection: mongooseCon,
        autoRemove: 'interval', // Default,
        autoRemoveInterval: 30 // minutes

    })
}));

app.get('/', (req, res) => {
    res.render('landing', {
        withoutAuth: true,
        homescreenNav: true,
        user: req.session.user || null,
        isSession: req.session.uid || false
    });

});

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.render('landing', {
        withoutAuth: true,
        homescreenNav: true,
        user: req.session.user || null,
        isSession: req.session.uid || false
    });

});

app.get('/contact', (req, res) => {
    res.render('contact/contact', {
        withoutAuth: true,
        contactPg: true,
        user: req.session.user || null,
        isSession: req.session.uid || false
    });
});

// Use Routes
app.use('/api/users', users);
app.use('/api/posts', posts);
app.use('/api/dashboard', dashboard);
app.use('/api/messages', messages);
app.use('/api/jobs', jobs);
app.use('/api/settings', settings);
// app.user('/api/', );

const PORT = process.env.PORT || 5000;

app.use((req, res, next) => {
    // Global variable declarations go here --->
    res.locals.user = req.user || null;
    next();

})


app.listen(PORT, () => {
    console.log(`Server is actively running at: ${PORT}`)
});