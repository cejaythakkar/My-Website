exports.renderPassionConfigPage = (request,response,next)=> {
    response.render('admin/passion',{user:request.session.user});
}