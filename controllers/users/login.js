const User = require('../../models/user');
const bcrypt = require('bcryptjs');

exports.getLoginPage = (request,response,next) => {
    response.render('users/login',{title:"Login"});
}

exports.loginPost = (request,response,next) => {
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
}

exports.logout = (request,response,next) => {
    request.session.destroy();
    response.redirect('/user/login');
}