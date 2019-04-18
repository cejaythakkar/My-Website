const path = require('path');

const express = require('express');

const router = express.Router();

const pathUtil = require('../../util/path');

const homeDetail = require('../../models/home');

const Img = require('../../models/home/image'),

      homeController = require('../../controllers/admin/home/home'),

      aboutController = require('../../controllers/admin/about/about'),

      beliefController = require('../../controllers/admin/belief/belief'),
      
      passionController = require('../../controllers/admin/passion/passion'),

      connectController = require('../../controllers/admin/connect/connect');
let homeDetailData;
router.post('/home',(request,response,next)=> {
    const greeting = request.body.greeting;
    const role = request.body.role;
    const introduction = request.body.introduction;
    if(!homeDetailData){
        new homeDetail(greeting,role,introduction,[]).save(() => {response.redirect('/admin')});
    }else{
        homeDetail.updateHomePageDetails({greeting,role,introduction},() => response.redirect('/admin'))
    }
});
router.post('/home/img',(request,response,next) => {
    let documents = [];
    request.files.forEach(file => {
        documents.push({
            _id : file.filename.split('-')[0],
            imageUrl : `/images/home/${file.filename}`,
            short_description : request.body[file.originalname]
        });
    });
    Img.saveImages(documents,() => {
        Img.fetchAllImages().then(images => {
            response.send({images:images});
        }).catch(err => console.log(err));
    });
});
router.get('/about',aboutController.renderAboutConfigPage);

router.get('/belief',beliefController.renderBeliefConfigPage);

router.get('/passion',passionController.renderPassionConfigPage);

router.get('/connect',connectController.renderConnectConfigPage);

router.get('/',homeController.renderHomeConfigPage);

module.exports = router;