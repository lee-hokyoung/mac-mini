const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const path = require('path');
const passport = require('passport');
const passportConfig = require('./passport');
const app = express();

const bodyParser = require('body-parser');
const route = require('./route');
const mongoURL = 'mongodb://localhost:27017/mission';
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(mongoURL, {useNewUrlParser:true}, (err) => {if(err) console.log(err);});

app.use(session({
    secret:'alsdud1218!',
    store:new MongoStore({
        url:mongoURL,
        ttr:60*60*24*7  // 7 days(default:14days)
    }),
    resave:false,
    saveUninitialized:true
}));

passportConfig();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use('/static', express.static(path.join(__dirname, 'static')));
app.use('/', route);

const achieving_route = require('./router/achieving_router');
const user_route = require('./router/user_router');
const holland_route = require('./router/holland_router');

app.use('/achieving', achieving_route);
app.use('/user', user_route);
app.use('/holland', holland_route);

app.listen(8080, function(){
    console.log('express server has started on port 8080');
});