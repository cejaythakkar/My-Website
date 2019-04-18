const homeDetail = require('../../../models/home');

exports.renderHomeConfigPage = (request,response,next) => {
    homeDetail.getHomePageDetails((data) => {
        console.log(data);
        homeDetailData = data;
        const tempData = {
            data : data 
        }
        response.render('admin/main',tempData);
    });
}