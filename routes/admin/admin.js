const path = require('path');
const express = require('express');
const router = express.Router();
const pathUtil = require('../../util/path');
router.get('/',(request,response,next)=> {
    //response.sendFile(path.join(pathUtil.getRootDirname(),'views','demos','shoping-cart','add-product.html'));
       response.render('admin/main');
    });
module.exports = router;