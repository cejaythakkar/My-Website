exports.renderFoodManagerPage = (request,response,next) => {
    response.render('admin/foodmanager',{user:request.session.user});
}