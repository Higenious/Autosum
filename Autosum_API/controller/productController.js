var  express            =  require('express');
var  productServices    =  require('../services/productservice');
var bodyParser = require('body-parser');
var async = require('async');

//Add Product 
function addproduct(req,  res){
    try {
        var reqBody = req.body;
        console.log(reqBody);
        productServices.addproduct(reqBody,
            function (successData) {
                res.send(successData);
            }, function (errorData) {
                res.send(errorData);
            })
    } catch (error) {
        res.send(RESPONSE.internalServerError(error.message));
    }
}




//getALlprodcuts
function allproducts(req, res){
    console.log('All products called');
    try {
        productServices.allproducts(
            function (successData) {
                res.send(successData);
            }, function (errorData) {
                res.send(errorData);
            })
    } catch (error) {
        res.send(RESPONSE.internalServerError(error.message));
    }
}






//place Ordewr



function placeorder(req, res){
    console.log('All products called');
    try {
        productServices.allproducts(
            function (successData) {
                res.send(successData);
            }, function (errorData) {
                res.send(errorData);
            })
    } catch (error) {
        res.send(RESPONSE.internalServerError(error.message));
    }
}














function getAlluser(req, res){
    res.send('Doin Well ');
}


    

    




module.exports.addproduct  = addproduct;
module.exports.allproducts = allproducts;
module.exports.placeorder  = placeorder;
