const getDb = require('../../util/database').getDb;
class Img{
    static saveImages(documents,callback){
        const db = getDb();
        db.collection('home-screen-images').insert(documents).then(() => {
            callback();
        }).catch(err => {
            throw err;
        })
    }

    static fetchAllImages(){
        const db = getDb();
        return db.collection('home-screen-images').find().toArray();
    }
}

module.exports = Img;