const User = require('../../models/user');
const bcrypt = require('bcryptjs');

exports.getSignupPage = (request,response,next) => {
    response.render('users/signup',{docTitle:"Sign up"});
}

exports.signupPost = (request,response,next) => {
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
}