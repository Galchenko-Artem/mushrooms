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
    const user = await User.findOne({ where: { email }});
    if(user){
      res.redirect('/login')
      return
    }
    const hash = await bcrypt.hash(password, 10);
    const newUser = await User.create({ name, email, password: hash });
    req.session.newUser = newUser.name;
    req.session.save(() => {
      res.redirect('/');
    })
  } catch (error) {
    res.send(`Error ------> ${error}`);
  }
});

module.exports = router;