const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const expressLayouts = require('express-ejs-layouts');
const methodOverride = require('./middlewares/methodOverride.js');
const logger = require('./middlewares/logger.js');
const router = require('./controllers/dish_controller.js')
const sessionController = require('./controllers/session_controller');
const dishController = require('./controllers/dish_controller');
const session = require('express-session');
const setCurrentUser = require('./middlewares/setCurrentUser');
const viewHelpers = require('./middlewares/viewHelpers');

app.use(expressLayouts);

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true}));


app.use(express.static('public'));

app.use(methodOverride);

app.use(session({
    secret: process.env.SESSION_SECRET || 'keyboard cat',
    resave: false,
    saveUninitialized: true,
}));

app.use(setCurrentUser)

app.use(viewHelpers)

app.use('/', sessionController);

app.use('/', dishController);




app.use(logger);

app.use('/',router)


app.listen(port, () => {
console.log(`listening on port ${port}`);
});