const path = require('path')
const express = require('express');
const app = express();
const bodyParser = require('body-parser'),
      multer = require('multer'),
      port=process.env.PORT || 3001;
const pathUtil = require('./util/path'),
        stylus = require('stylus'),
        nib = require('nib');
const mongoConnect = require('./util/database').mongoConnect;
app.set('view engine','pug');
app.set('views','views');
app.use(stylus.middleware({
    src:path.join(pathUtil.getRootDirname(),'public','css','stylus'),
    dest:path.join(pathUtil.getRootDirname(),'public','css'),
    compile:function(str,path){
        return stylus(str).set('filename',path).use(nib());
    }
}));
const genericRoutes = require('./routes/index');
const adminRoutes = require('./routes/admin/admin');

// const router = express.Router();
// router.get('/',( request , response , next ) => {
//     response.sendFile(path.join(__dirname,'build','index.html'));
// });
// app.use(express.static(path.join(__dirname,'../', 'build')));

app.use(bodyParser.urlencoded({extended:false}));
const storage = multer.diskStorage({
    destination:(request,file,callback)=>{
        callback(null,path.join(pathUtil.getRootDirname(),'public','images','home'));
    },
    filename:(request,file,callback)=>{
        callback(null,`${Date.now()}-${file.originalname}`)
    }
});
const filefilter = (request , file , callback) => {
    switch(file.mimetype){
        case 'image/jpg':
        case 'image/jpeg':
        case 'image/png':
            callback(null,true);
            break;
        default:
            callback(null,false);
    }
}
app.use(multer({storage:storage,fileFilter:filefilter}).array('img-uploader'));
app.use(express.static(path.join(pathUtil.getRootDirname(),'public')));
app.use(express.static(path.join(pathUtil.getRootDirname(),'node_modules','bootstrap','dist')));

app.use('/admin',adminRoutes);
app.use(genericRoutes);
app.use((request,response,next)=>{
    response.status(404).send('<h1>Page Not Found</h1>');
})
mongoConnect(() => {
    app.listen(port,function(){
        console.log('the server has started on port ' + port);
    });
})