exports.getRegisterPage = (request,response,next) => {
    response.render('users/register',{docTitle:"Sign up"});
}

exports.registerPost = (request,response,next) => {
    response.status(200).send({status:"success"})
}