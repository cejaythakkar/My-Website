const getDb = require('../../util/database').getDb;
class Img{
    static saveImages(documents,callback){
        getDb().collection('home-screen-images').insert(documents).then(() => {
            callback();
        }).catch(err => {
            throw err;
        })
    }
}

module.exports = Img;