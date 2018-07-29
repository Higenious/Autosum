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

var inventory   = new Schema({
    product : { type: String },  
    inStock     : { type: Number}
})


var purchaseorders = new Schema({
    customerName : {type: String},
    Product      :   {type: String},
    quantityRequested : {type: Number},
    status    : {type:String},
})


module.exports.product = mongoose.model('product', product);
module.exports.inventory = mongoose.model('inventory', inventory);
module.exports.purchaseorders = mongoose.model('purchaseorders', purchaseorders);
