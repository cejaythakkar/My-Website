const getDb = require('../util/database').getDb;
const ObjectId = require('mongodb').ObjectId;
module.exports = class Request{
    constructor(firstName,lastName,email,phoneNumber,briefIntro){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phoneNumber;
        this.briefIntro = briefIntro;
    }
    save(){
        const db = getDb();
        return db.collection('requests').insertOne(this);
    }
    static findByEmail(email){
        const db = getDb();
        return db.collection('requests').findOne({email:email});
    }
    static findById(id){
        const db = getDb();
        return db.collection('requests').findOne({_id: new ObjectId(id)});
    }
};