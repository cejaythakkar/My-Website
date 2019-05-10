const User = require('../../models/user');
const bcrypt = require('bcryptjs');

exports.getLoginPage = (request,response,next) => {
    response.render('users/login',{title:"Login",error:request.flash('error')[0]});
}

exports.loginPost = (request,response,next) => {
    const userName = request.body.inp_username,
          password = request.body.inp_password;
    User.findUser(userName).then(user => {
        if(!user){
            request.flash('error',{errorType:'danger',message:'Incorrect Username!!'});
            return response.redirect('/user/login')
        }
        bcrypt.compare(password,user.password).then(doMatch => {
            if(!doMatch){
                request.flash('error',{errorType:'danger',message:'Incorrect Password!!'});
                return response.redirect('/user/login');
            }
            request.session.user = user;
            request.session.save(err => {
                response.redirect('/admin')
            })
        })
    }).catch(err => console.log(err));
}

exports.logout = (request,response,next) => {
    request.session.destroy();
    response.redirect('/user/login');
}