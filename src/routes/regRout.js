const bcrypt = require('bcrypt');

const express = require('express');

const router = express.Router();

const renderTemplate = require('../lib/renderTemplat');
const Register = require('../views/Register');
const { User } = require('../../db/models');

router.get('/', (req, res) => {
  renderTemplate(Register, null, res);
});

router.post('/', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const checkUser = await User.findOne({ where: { email }});
    const checkEmail = await User.findOne({ where: { name }});
    if(checkUser){
      return res.send('Имя уже используется');
    }
    if(checkEmail){
      return res.send('Почта уже используется');
    }
    if(!checkEmail && !checkUser){
      const hash = await bcrypt.hash(password, 10);
      const newUser = await User.create({ name, email, password: hash });
      req.session.newUser = newUser.name;
      req.session.user_id = newUser.id;
      req.session.save(() => {
        res.redirect('/');
      })
    }
  } catch (error) {
    res.send(`Error ------> ${error}`);
  }
});

module.exports = router;