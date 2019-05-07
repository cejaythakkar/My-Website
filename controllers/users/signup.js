const User = require('../../models/user');
const fs = require('fs');
const Request = require('../../models/request');
const bcrypt = require('bcryptjs');
const getRootDirname = require('../../util/path').getRootDirname;
const path = require('path');
exports.getSignupPage = (request,response,next) => {
    response.render('users/signup',{docTitle:"Sign up",requestId : request.query.requestId});
}

exports.signupPost = (request,response,next) => {
    const userName = request.body.inp_username,
          password = request.body.inp_password,
          requestId = request.body.request_id
    let   firstName,
          lastName,
          email,
          phone,
          userType;
    // if(!requestId){
    //     request.flash('error',{errorType:'danger',message:`It Seems You havn't registered with us!! please Register first..`});
    //     return response.redirect('/user/register');
    // }
    // Request.findById(requestId).then(r => {
    //     if(!r){
    //         request.flash('error',{errorType:'danger',message:`It Seems You havn't registered with us!! please Register first..`});
    //         return response.redirect('/user/register');
    //     }
    //     firstName = r.firstName;
    //     lastName = r.lastName;
    //     email = r.email;
    //     phone = r.phone;
    //     userType = "MEMBER";
        User.findUser(userName).then((user) => {
            if(user){
                request.flash('error',{errorType:'info',message:`The Username is already registered!! please login..`});
                return response.redirect('/user/login');
            }
            fs.mkdirSync(path.join(getRootDirname(),'public','users',userName));
            bcrypt.hash(password,12).then(hashedPassword => {
                new User(firstName,lastName,email,phone,userName,userType,hashedPassword).save().then(() => {
                    response.redirect('/user/login');
                }).catch(err => console.log(err));
            }).catch(err => console.log(err));
        }).catch(err => console.log(err));
    // }).catch(err => console.log(err))
    
}