const express = require('express');
const expressSession = require('express-session');
const hbs = require('express-handlebars');
const cors = require('cors');
const morgan = require('morgan');
const methodOverride = require('method-override');
const path = require('path');
require('dotenv').config();

//init 
const app = express();
const {routerAPI} = require('./routes');

//settings
app.set('port', require('./config/config').PORT || 4000);
app.set('views', path.join(__dirname, '/views'));
app.set('public', path.join(__dirname, '/public'));
app.engine('.hbs', hbs.engine({

    defaultLayout: 'main.hbs', 
    layoutsDir: path.join(app.get('views'), '/layouts'),
    partialsDir: path.join(app.get('views'), '/partials'),
    extname: '.hbs'

}));
app.set('view engine', 'hbs');

//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(expressSession({

    secret: require('./config/config').SECRET_SESSION, 
    resave: true, 
    saveUninitialized: true

}));
app.use(methodOverride('_method'));

//routes
routerAPI(app);

//public

//server

app.listen(app.get('port'), ()=>{

    console.log("SERVER UP "+app.get('port'));

});