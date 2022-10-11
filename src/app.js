require('dotenv').config();
require('@babel/register');

const path = require('path');
const express = require('express');
const morgan = require('morgan');

const session = require('express-session');
const FileStore = require('session-file-store')(session);

const { PORT, SESSION_SECRET } = process.env;
const { sequelize } = require('../db/models');

const app = express();
const homeRouter = require('./routes/homeRout');
const regRouter = require('./routes/regRout');
const loginRouter = require('./routes/logRout');

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const sessionConfig = {
    name: 'TeaParty',
    store: new FileStore(),
    secret: SESSION_SECRET ?? 'party',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 10,
      httpOnly: true, 
    },
  };

app.use(session(sessionConfig));

app.get('/logout', (req, res) =>{
    if (req.session.newUser){
      req.session.destroy(() => {
        res.clearCookie('TeaParty');
        res.redirect('/');
      });
    }else{
      res.redirect('/login');
    }
  });

app.use('/', homeRouter);
app.use('/registration', regRouter);
app.use('/login', loginRouter);


app.listen(PORT, async () => {
    try {
      await sequelize.authenticate();
      console.log('Соединение с базой установлено!');
    } catch (err) {
      console.log(err, 'Error!');
    }
    console.log(`Сервер поднят на ${PORT} порту!`);
  });
  