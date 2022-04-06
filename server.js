const sequelize = require('./config');
const express = require('express');
const exphbs = require('express-handlebars')
const path = require('path');
const session = require('express-session');
const controllers = require('./controllers');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const helpers = require('./utils/helpers');

const sessionSettings = {
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitialized: false,
};

const app = express();
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create({
	helpers
});
// Tells node we're using handlebars as our templating engine
// configured handlebars as the view engine
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')
// somePath/public
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sessionSettings));
app.use(controllers);
sequelize.sync({
	force: false
}).then(() => {
	app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
});