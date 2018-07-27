var mongoose     = require('mongoose');
var productModel    =   require('../model/product').product;





function addproduct(data,  successData, errorData){
    try {
        productModel(data).save().
            then(function (result) {
                //successData(data);
                successData({success: true, status: 200, data: data, message : "suceesfullly inserted"});
            }).catch(function (error) {
                errorData(error) 
            })
    } catch  (error) {
        errorData();        
    }
}







// function allproducts(successData, errorData){
//     try {
//         productModel.find({}).
//             then(function (result) {
//                 successData({status: 200, result: result, message : "suceesfullly Fetched all record"});
//             }).catch(function (error) {
//                 errorData(error)
//             })
//     } catch (error) {
//         errorData(error);
//     }
// }



function allproducts(successData, errorData){
    try {
    productModel.aggregate([
      { $group : { _id : "$productName", total: { $sum: "$productQuantity" } } }
   ]).then(function (result) {
                //var output = {name : result._id.name, prd}
                successData({status: 200, result: result, message : " Fetched all record"});
            }).catch(function (error) {
                errorData(error)
            })
    } catch (error) {
        errorData(error);
    }
}

















module.exports.addproduct    =  addproduct
module.exports.allproducts   =  allproducts
