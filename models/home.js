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
        getDb().collection('home').insertOne(this).then(result => callback()).catch(() => console.log(err));
    }

    static getHomePageDetails(callback){
        let data = {};
        getDb().collection('home').findOne({
            id:'detail101'
        }).then((result) => {
            data.homeDetails = result;
            return getDb().collection('home-screen-images').find()
        }).
        then((result) => {
            data.sliderImages = result;
            callback(data);
        });
    }

    static updateHomePageDetails(data,callback){
        getDb().collection('home').updateOne({id:'detail101'},{$set:data}).then(data => callback());
    }
}  

module.exports = HomePageDetails;