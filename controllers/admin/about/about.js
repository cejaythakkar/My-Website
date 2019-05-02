exports.renderAboutConfigPage =  (request,response,next) => {
    response.render('admin/about',{user:request.session.user});
}