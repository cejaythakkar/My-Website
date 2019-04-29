const express = require('express');
const router = express.Router();

router.get('/login',(request,response,next) => {
    response.render('users/login',{docTitle:"Login"});
});
router.get('/register',(request,response,next) => {
    response.render('users/register',{docTitle:"Sign up"});
});
router.post('/register',(request,response,next) => {
    // response.render('users/register',{docTitle:"Sign up"});
    console.log(request.body);
    response.status(200).send({status:"success"})
});

module.exports = router;