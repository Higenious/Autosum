var mongoose = require('mongoose');
var productModel = require('../model/product').product;
var inventoryModel = require('../model/product').inventory;




//Add Product

function addproduct(data, successData, errorData) {
    try {
        productModel(data).save().
            then(function (result) {
                //successData(data);
                successData({ success: true, status: 200, data: data, message: "suceesfullly inserted" });
            }).catch(function (error) {
                errorData(error)
            })
    } catch (error) {
        errorData();
    }
}







// All Product In Store

function allproducts(successData, errorData) {
    try {
        inventoryModel.aggregate([
            { $group: { _id: "$product", total: { $sum: "$inStock" } } }
        ]).
            then(function (result) {
                var Expresults = [];
                for (var i = 0; i < result.length; i++) {
                    Expresults.push({
    
                        "product": result[i]._id,
                        "inStock": result[i].total
    
                    });
                }
                successData({ status: 200, data: Expresults, message: " Fetched inventory" });
            }).catch(function (error) {
                errorData(error);
            })
    } catch (error) {
        errorData(error);
    }
}



//Inventory

function inventory(successData, errorData) {
    try {
        productModel.aggregate([
            { $group: { _id: "$productName", total: { $sum: "$productQuantity" } } }
        ]).then(function (result) {
            var Expresults = [];
            for (var i = 0; i < result.length; i++) {
                Expresults.push({

                    "product": result[i]._id,
                    "inStock": result[i].total

                });
            }
            
            successData({ status: 200, result: Expresults, message: " Fetched inventory" });
        }).catch(function (error) {
            errorData(error)
        })
    } catch (error) {
        errorData(error);
    }
}














module.exports.addproduct  = addproduct
module.exports.allproducts = allproducts
module.exports.inventory   = inventory