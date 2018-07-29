var express = require('express');
var productServices = require('../services/productservice');
var bodyParser = require('body-parser');
var async = require('async');
var productModel = require('../model/product').product;
var inventoryModel = require('../model/product').inventory;
var productModel  = require('../model/product').product;
var purchaseordersModel= require('../model/product').purchaseorders;

//Add Product 
function addproduct(req, res) {
    var reqBody = req.body;
    console.log(reqBody);
     var pname = req.body.product;
     var Quantity = req.body.inStock;
     inventoryModel.update({product : pname}, {$inc: {inStock: Quantity}},{upsert: true}, function(error, result) {
        if (error) {
            res.send(error);
        } else {
            res.send({status:200, data: reqBody, message : "Product Added Successfully"});        }
    })
}




//getALlprodcuts
function allproducts(req, res) {
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



function placeorder(req, res) {
    console.log('place order API called..');
    var reqBody = req.body;
    console.log(reqBody);
    var quantityRequested = reqBody.quantityRequested
    var Product = reqBody.Product;
    

    try {
        inventoryModel.findOne({ product: Product })
            .then(function (result) {
                if (quantityRequested > result.inStock) {
                    var data = {customerName:reqBody.customerName, Product:reqBody.Product, quantityRequested:reqBody.quantityRequested ,status: "Cancelled"}
                    purchaseordersModel(data).save();
                    res.send({ success: false, status: 400, data: data, message: "purchase order exceed the ‘in-stock’ quantity" });
                }
                else {
                    try {
                        inventoryModel.update({ product: Product }, { $inc: { inStock: -quantityRequested } })
                            .then(function (result) {
                                var data = {customerName:reqBody.customerName, Product:reqBody.Product, quantityRequested:reqBody.quantityRequested ,status: "Confirmed"}
                                purchaseordersModel(data).save();
                                res.send({ success: true, status: 200, data: data, message: "Purchase order placed Successfully" });
                                console.log(result);
                            }).catch(function (error) {
                                res.send(error)
                            });
                    } catch (error) {
                        throw error;
                    }


                }
            }).catch(function (error) {
                throw error;
            })
    } catch (error) {
        throw error;
    }
}


















function inventory(req, res) {
    console.log('Inventory API called..');
    try {
        productServices.inventory(
            function (successData) {
                console.log(successData);
                for (var i = 0; i < successData.result.length; i++) {
                    inventoryModel(successData.result[i]).save();
                }
                productModel.remove( { } );
                res.send(successData);
            }, function (errorData) {
                res.send(errorData);
            })
    } catch (error) {
        res.send(RESPONSE.internalServerError(error.message));
    }
}









module.exports.addproduct = addproduct;
module.exports.allproducts = allproducts
module.exports.placeorder = placeorder
module.exports.inventory = inventory

