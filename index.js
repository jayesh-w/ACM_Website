const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');


// IMPORT  THE  ROUTES
const mainRoutes = require('./routes/main');

// EXTENDED IS FALSE REASON IS WE DONT USE URLENCODED FOR FORMS
app.use(bodyParser.urlencoded({ extended: false }));

// MAKE PUBLIC FOLDER AS PUBLIC
app.use(express.static(path.join(__dirname, 'public')));

app.use(mainRoutes);
var port = process.env.PORT || 8080;
app.listen(port, () => {
	console.log("application started");
});
