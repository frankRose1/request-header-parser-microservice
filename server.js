const express = require('express');
const useragent = require('express-useragent');
const path = require('path');
const routes = require('./routes/index');

const app = express();

//set the view engine
app.set( 'views', path.join(__dirname, 'views') );
app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));

app.use(useragent.express());

app.use('/', routes);

app.listen(3000, () =>{
    console.log('Working');
});

module.exports = app;