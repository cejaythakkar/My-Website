const mongodb = require('mongodb');
const mongoclient = mongodb.MongoClient;

const mongoConnect = (callback) => {
    mongoclient.connect(
        'mongodb+srv://jaythakkar:1tp8GAwXUwem4c81@cluster0-bk1g9.mongodb.net/test?retryWrites=true',
        {useNewUrlParser:true}
    ).then(celient => {
        console.log('connected!');
        callback(celient);
    }).catch(err => {
        console.log(err);
    });
}

module.exports = mongoConnect;