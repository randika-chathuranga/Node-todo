var express = require('express');
var todoController = require('./controllers/todoController');

var app = express();

//set up template engine
app.set('view engine', 'ejs');

//static files
app.use('/assets', express.static('./public'));

//fire controllers
todoController(app);

//listen to the port
app.listen(3000);
