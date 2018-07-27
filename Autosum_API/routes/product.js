const express             =   require('express');
var   router              =   express.Router();
var   ProductController   =   require('../controller/productController');
var path                  =   require('path');


  



//route 

router.post('/api/product/addproduct' , ProductController.addproduct);
router.get('/api/product/allproduct', ProductController.allproducts)
router.post('/api/product/placeorder', ProductController.placeorder);







//exports route
module.exports = router;