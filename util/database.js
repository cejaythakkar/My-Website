const mongodb = require('mongodb');
const mongoclient = mongodb.MongoClient;
const MONGODB_URI = 'mongodb+srv://jaythakkar:1tp8GAwXUwem4c81@cluster0-bk1g9.mongodb.net/website?retryWrites=true'
let _db;

const mongoConnect = (callback) => {
    mongoclient.connect(
        MONGODB_URI
        ,
        {useNewUrlParser:true}
    ).then(client => {
        _db = client.db();
        callback();
    }).catch(err => {
        console.log(err);
        throw err;
    });
}

const getDb = () => {
    if(_db){
        return _db;
    }
    throw new Error('database not found!!')
}
exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
exports.MONGODB_URI = MONGODB_URI