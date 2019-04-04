const path = require('path');
const express = require('express');
const router = express.Router();
const pathUtil = require('../../../util/path');
const products = [];
router.get('/add-product',(request,response,next)=> {
   response.sendFile(path.join(pathUtil.getRootDirname(),'views','demos','shoping-cart','add-product.html'));
});
router.post('/add-product',(request,response,next)=>{
    console.log(request.body);
    products.push({title:request.body.title})
    response.redirect('/');
});
exports.router = router;
exports.products = products;