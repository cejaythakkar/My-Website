exports.renderNotificationPage = (request,response,next) => {
    response.render('admin/notifications',{toShowContentsidebar:false,user:request.session.user})
}