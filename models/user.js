const getDb = require('../util/database').getDb;
class User{
    constructor(firstName,lastName,email,phone,userName,userType,password){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.userName = userName;
        this.userType = userType
        this.password = password;
    }

    save(){
        const db = getDb();
        return db.collection('users').insertOne(this);
    }
    static findUser(userName){
        const db = getDb();
        return db.collection('users').findOne({
            userName : userName
        })
    }
}

module.exports = User;