const express = require('express');
const User = require('../../models/user');
const bcrypt = require('bcryptjs')
const router = express.Router();

router.get('/login',(request,response,next) => {
    response.render('users/login',{docTitle:"Login"});
});

router.post('/login',(request,response,next) => {
    const userName = request.body.inp_username,
          password = request.body.inp_password;
    User.findUser(userName).then(user => {
        if(!user){
            return response.redirect('/user/login')
        }
        bcrypt.compare(password,user.password).then(doMatch => {
            if(!doMatch){
                return response.redirect('/user/login');
            }
            request.session.user = user;
            request.session.save(err => {
                console.log(err);
                response.redirect('/admin')
            })
        })
    }).catch(err => console.log(err));
});

router.get('/register',(request,response,next) => {
    response.render('users/register',{docTitle:"Sign up"});
});

router.post('/register',(request,response,next) => {
    // response.render('users/register',{docTitle:"Sign up"});
    console.log(request.body);
    response.status(200).send({status:"success"})
});

router.get('/signup',(request,response,next) => {
    response.render('users/signup',{docTitle:"Sign up"});
});

router.post('/signup',(request,response,next) => {
    const userName = request.body.inp_username,
          password = request.body.inp_password;
    User.findUser(userName).then((user) => {
        if(user){
            return response.redirect('/user/signup');
        }
        bcrypt.hash(password,12).then(hashedPassword => {
            new User(null,null,null,null,userName,null,hashedPassword).save().then(() => {
                response.redirect('/user/login');
            }).catch(err => console.log(err));
        }).catch(err => console.log(err));
    }).catch(err => console.log(err));
});

router.post('/logout',(request,response,next) => {
    request.session.destroy();
    response.redirect('/user/login');
})
module.exports = router;