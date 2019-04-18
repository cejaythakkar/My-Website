const getDb = require('../util/database').getDb;
class HomePageDetails{
    constructor(greetings,role,intro,sliderImages){
        this.id = 'detail101'
        this.greetings = greetings;
        this.role = role;
        this.intro = intro;
        this.sliderImages = sliderImages;
    }

    save(callback){
        db.collection('home').insertOne(this).then(result => callback()).catch(() => console.log(err));
    }

    static getHomePageDetails(callback){
        const db = getDb(); 
        let data = {};
        db.collection('home').findOne({
            id:'detail101'
        }).then((result) => {
            data.homeDetails = result;
            db.collection('home-screen-images').find().toArray().then(result => {
                data.images = result;
                callback(data);
            }).catch(err => console.log(err))
        })
    }

    static updateHomePageDetails(data,callback){
        db.collection('home').updateOne({id:'detail101'},{$set:data}).then(data => callback());
    }
}  

module.exports = HomePageDetails;