const path = require('path');
const express = require('express');
const router = express.Router();
const pathUtil = require('../util/path');
const adminData = require('./demos/shoping-cart/admin');
router.get('/',(request,response,next)=> {
    // response.sendFile(path.join(pathUtil.getRootDirname(),'views','demos','shoping-cart','shop.html'));
    var abouts = [
        {
            imgUrl:'/images/about/dummy_background.jpg',
            title:'Google Cloud',
            role:'Front-End Software Engineer (Lead), Since Fall 2015',
            place:'New York, NY',
            description:'My team works on building amazing user experiences for Google Cloud users. I helped carry out the top-to-bottom redesign and implementation of Cloud Datastore\'s UI, and currently lead the front-end team of Google\'s Cloud SQL product. March 2017, we launched our PostgreSQL offering – which increased Cloud SQL\'s total addressable market by ~40%.'
        },
        {
            imgUrl:'/images/about/dummy_background.jpg',
            title:'Google Cloud',
            role:'Front-End Software Engineer (Lead), Since Fall 2015',
            place:'New York, NY',
            description:'My team works on building amazing user experiences for Google Cloud users. I helped carry out the top-to-bottom redesign and implementation of Cloud Datastore\'s UI, and currently lead the front-end team of Google\'s Cloud SQL product. March 2017, we launched our PostgreSQL offering – which increased Cloud SQL\'s total addressable market by ~40%.'
        },
        {
            imgUrl:'/images/about/dummy_background.jpg',
            title:'Google Cloud',
            role:'Front-End Software Engineer (Lead), Since Fall 2015',
            place:'New York, NY',
            description:'My team works on building amazing user experiences for Google Cloud users. I helped carry out the top-to-bottom redesign and implementation of Cloud Datastore\'s UI, and currently lead the front-end team of Google\'s Cloud SQL product. March 2017, we launched our PostgreSQL offering – which increased Cloud SQL\'s total addressable market by ~40%.'
        }
    ];
    var beliefs = [
        {
            text : "love your country"
        },
        {
            text : "belive in god and miracle"
        },
        {
            text : "their is no such thing as a shortcut"
        },
        {
            text : "be raw and rough"
        },
        {
            text : "be sporty and adventerous"
        },
        {
            text : "live with nature"
        },
        {
            text : "avoid plastic as much as possible"
        },
        {
            text : "go by bicycle within certain kms or promote cycling"
        },
        {
            text : "plant trees"
        },
        {
            text : "keep doing different things"
        },
        {
            text : "try to be better of yourselves everyday"
        },
        {
            text : "make friends"
        },
        {
            text : "sit back have `chai` and hangout with friends"
        }
    ];
    response.render('main',{products:adminData.products,docTitle:"My Shop",abouts:abouts,beliefs:beliefs});
});

module.exports = router;