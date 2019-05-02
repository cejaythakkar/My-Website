exports.renderConnectConfigPage = (request,response,next)=> {
    response.render('admin/connect',{user:request.session.user});
}