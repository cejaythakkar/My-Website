exports.saveAllImages = (request,response,next) => {
    let documents = [];
    request.files.forEach(file => {
        documents.push({
            _id : file.filename.split('-')[0],
            imageUrl : `/images/home/${file.filename}`
        });
    });
    Img.saveImages(documents,() => {
        response.redirect('/admin');
    });
}