const path = require('path');
const express = require('express');
const router = express.Router();
const pathUtil = require('../util/path');
const fs = require('fs');
router.get('/',(request,response,next)=> {
    // response.sendFile(path.join(pathUtil.getRootDirname(),'views','demos','shoping-cart','shop.html'));
    var abouts = [
        {
            imgUrl:'/images/about/dummy_background.jpg',
            title:'R.J Tibrewal College of Computer Application',
            role:'Bachelors of Computer Application, class of 2008',
            place:'Ahmedabad, Gujarat',
            description:`I'm grateful for these three years. RJTCCA layed the foundation of what i am today, a UI Developer. RJTCCA is where i learned the basics of programming and computer languages like C , C++ , Visual Basic , C# , SQL and many more. RJTCCA was where I fell in love with learning, made good friends from whom i learned very good things and discovered a passion for the arts and drumming.`
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
    var contacts = [
        {
            imageUrl:'/images/icons/contact/telephone_64.png',
            title:'Contact Number',
            value:'+91-9978821813'
        },
        {
            imageUrl:'/images/icons/contact/gmail_64.png',
            title:'E-Mail',
            value:'ce.jaythakkar@gmail.com'
        },
        {
            imageUrl:'/images/icons/contact/linkedin_64.png',
            title:'LinkedIn',
            value:'linkedin profile link'
        },
        {
            imageUrl:'/images/icons/contact/skype_64.png',
            title:'Skype',
            value:'skype id'
        },
        {
            imageUrl:'/images/icons/contact/whatsapp_64.png',
            title:'Whatsapp',
            value:'+91-9978821813'
        },
        {
            imageUrl:'/images/icons/contact/twitter_64.png',
            title:'Twitter',
            value:'Twitter profile url'
        },
        {
            imageUrl:'/images/icons/contact/facebook_64.png',
            title:'Facebook',
            value:'Facebook profile url'
        },
        {
            imageUrl:'/images/icons/contact/instagram_64.png',
            title:'Instagram',
            value:'Instagram profile url'
        }
    ]
    var passionImages = {};
    const passionFolders = fs.readdirSync(path.join(pathUtil.getRootDirname(),'public','images','passion'));
    for(folder in passionFolders){
        var folder = folder;
        passionImages[passionFolders[folder]] = [];
        var listOfImages = fs.readdirSync(path.join(pathUtil.getRootDirname(),'public','images','passion',passionFolders[folder]));
        for(image in listOfImages){
            passionImages[passionFolders[folder]].push('/images/passion/'+ passionFolders[folder] +'/'+listOfImages[image]);
        }
    }
    response.render('main',{docTitle:"My Shop",abouts:abouts,beliefs:beliefs,passionImages:passionImages,contacts:contacts});
});

module.exports = router;