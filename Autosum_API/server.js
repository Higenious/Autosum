var mongoose       = require('mongoose');
var express        =  require('express');
var bodyParser     =  require('body-parser');
var app            =  express();
var path           = require('path');
var port           =  5000;
var productModel   =  require('./model/product').product;
var router        =  express.Router();
var productRoutes    =  require('./routes/product');
//connect to DB

mongoose.connect('mongodb://127.0.0.1:27017/Autosum',{ useNewUrlParser: true });
console.log('connected to database');
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({  extended: true }));


app.get('/', function(req, res){
    console.log('Running on server');
    res.send('index');
})


// Routess/
app.all('*', productRoutes);

//start  application on port
app.listen(port, function ()  {
    console.log(`Server Successfully started on port ${port}`);
});