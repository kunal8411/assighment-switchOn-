const express= require('express');
const port =8000;
const app= express();
app.use(express.urlencoded());
const path= require('path');

const session= require('express-session');
app.use(express.static('./assets'));
const mongoose= require('./config/mongoose')

const MongoStore=require('connect-mongo')(session);
const expressLayout=require('express-ejs-layouts');
const passport= require('passport');
const passportLocal= require('./config/passport-local');
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);
//set up view engine
app.set('view engine','ejs');
// app.set('views',path.join(__dirname,'views'));  
app.set('views','./views')

app.use(session({
    secret:'abcdefghijk',
    saveUninitialized:'false',
    resave:'false',
    cookie:{
        //milliseconds, max age of cookie specified here 
       maxAge:(1000 * 60 * 100)
   },
   store:new MongoStore(
    {
         mongooseConnection:mongoose,
         autoRemove: 'disabled'

    },
    function(err){
        console.log(err || 'connect-mongoose setup OK')
    }

)
}));



app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticateduser);

app.use(expressLayout);
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

app.use('/', require('./routes/index'))

app.listen(port,function(err){
    if(err){
        console.log(`Server will not run on this port:${err}`);//interpoletion

    }

    console.log(`server is running on port:${port}`);

})
