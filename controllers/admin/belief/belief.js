exports.renderBeliefConfigPage = (request,response,next)=> {
    response.render('admin/belief',{user:request.session.user});
}