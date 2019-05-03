const Register = require('../../models/request');
const sendMail = require('../../util/mail').sendMail;
exports.getRegisterPage = (request,response,next) => {
    response.render('users/register',{docTitle:"Sign up"});
}

exports.registerPost = (request,response,next) => {
    // response.status(200).send({status:"success"})
    const firstName = request.body['inp_first-name'],
          lastName = request.body['inp_last-name'],
          email = request.body['inp_email'],
          phone = request.body['inp_phone-number'],
          briefIntro = request.body['inp_description'];
    Register.findByEmail(email).then((r)=>{
        if(r){
            return response.status(302).json({
                message : "request already exists!!"
            })
        }
        const registerRequest = new Register(firstName,lastName,email,phone,briefIntro);
        return registerRequest.save().then((r) => {
            response.status(201).json({
                message: "request Successfully sent!!"
            });
            return sendMail({
                to:r.ops[0].email,
                from:'thethakkarsjournal.in',
                subject:'Request Acceptence',
                html:`<h1>Your request has been accepted. please click on the link below to signup</h1><br /><a href="http://localhost:3001/user/signup?requestId=${r.ops[0]._id.toString()}">SignUp<a/>`
            }).then((r) => {
                console.log('sending Email successful');
            }).catch((err => console.log(err)));
        }).catch(err => {
            return response.status(500).json(()=>{
                message : "apologies..something Went Wrong!!"
            })
        });
    })
    .catch(err => console.log(err));
}

