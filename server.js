//Modules & set up =========================================================
var express      = require('express');
var app          = express();
var port         = process.env.PORT || 1337;
var morgan       = require('morgan');
var bodyParser   = require('body-parser');
var mongoose     = require('mongoose');

//Config =========================================================
if (process.env.NODE_ENV === 'production') {
    mongoose.connect("mongodb://"
                      +process.env.DB_USERNAME+
                      ":"
                      +process.env.DB_PASSWORD+
                      "@"
                      +process.env.DB_HOST+
                      "/"
                      +process.env.DB_COLLECTION);;

} else {
    mongoose.connect("mongodb://localhost/test");
}

//app middlewares
app.use(express.static(__dirname + '/public'));

//only show logs with arent testing
if (process.env.NODE_ENV !== 'test') {
    app.use(morgan('dev'));
}

// set the view engine to ejs
app.set('views', __dirname + '/public');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routes =========================================================
//API - Routes ==================================================
app.use('/api/auth', require('./api/auth/auth-router'));
app.use('/api/users', require('./api/users/user-router'));
//...

//Site - Routes ==================================================
app.get('/', function (req, res) {
    res.render('index.html');
});

//Server =========================================================
app.listen(port, function() {
    console.log('Listenning on port: ' + port);
});
