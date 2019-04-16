const path = require('path');
const express = require('express');
const router = express.Router();
const pathUtil = require('../../util/path');
const homeDetail = require('../../models/home');
const Img = require('../../models/home/image');
let homeDetailData;
router.get('/',(request,response,next)=> {
    homeDetail.getHomePageDetails((data) => {
        homeDetailData = data;
        const tempData = {
            data : data 
        }
        console.log('==========fetch============',data);
        response.render('admin/main',tempData);
    });
});
router.post('/home',(request,response,next)=> {
    const greeting = request.body.greeting;
    const role = request.body.role;
    const introduction = request.body.introduction;
    if(!homeDetailData){
        console.log('==========add============');
        new homeDetail(greeting,role,introduction,[]).save(() => {response.redirect('/admin')});
    }else{
        console.log('==========update============');
        homeDetail.updateHomePageDetails({greeting,role,introduction},() => response.redirect('/admin'))
    }
});
router.post('/home/img',(request,response,next) => {
    let documents = [];
    request.files.forEach(file => {
        documents.push({
            _id : file.filename.split('-')[0],
            imageUrl : `/images/home/${file.filename}`
        });
    });
    Img.saveImages(documents,() => {
        response.redirect('/admin');
    });
});
router.get('/about',(request,response,next)=> {
        response.render('admin/about');
    });
router.get('/belief',(request,response,next)=> {
        response.render('admin/belief');
    });
router.get('/passion',(request,response,next)=> {
        response.render('admin/passion');
    });
router.get('/connect',(request,response,next)=> {
        response.render('admin/conect');
    });
module.exports = router;