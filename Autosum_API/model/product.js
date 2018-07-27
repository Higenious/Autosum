var mongoose = require('mongoose');
mongoose.Promise = Promise;
var Schema = mongoose.Schema;

var product = new Schema({ 
    productId       : { type: String, required: true },
    productName     : {type: String,  required :true},
    productQuantity : { type: Number },
    customerName: { type: String },
    quantityRequested: { type: Number },
    Status :{type :String, enum : ['Confirmed','Cancelled'],  default : 'Cancelled'},
})





module.exports.product = mongoose.model('product', product);