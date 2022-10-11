const bcrypt = require('bcrypt');

const express = require('express');

const router = express.Router();

const renderTemplate = require('../lib/renderTemplat');
const Login = require('../views/Login');
const { User } = require('../../db/models');

router.get('/', (req, res) => {
  renderTemplate(Login, null, res);
});

router.post('/', async (req, res) => {
  const {name, email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if(!user){
      res.redirect('/registration')
      return
    }
    const passCheck = await bcrypt.compare(password, user.password);
    if(passCheck){
      req.session.newUser = user.name;
      req.session.save(() => {
        res.redirect('/');
      });
    }else{
      res.redirect('/login')
    }
  } catch (error) {
    res.send(`Error ------> ${error}`);
  }
})

module.exports = router;