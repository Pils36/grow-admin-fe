const express = require('express');
const path = require('path');
const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 3300;

const fileupload = require('express-fileupload');

app.engine('ejs', require('express-ejs-extend'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// Use Express Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileupload({ useTempFiles: true }));

app.use('/', require('./routes/welcome'));
app.use('/auth', require('./routes/auth'));
app.use('/dashboard', require('./routes/home'));
app.use('*', require('./routes/error'));

app.listen(PORT, () => console.log(`listening on port ${process.env.APP_URL}:${PORT}`));
