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
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (user) {
      const checkPassword = await bcrypt.compare(password, user.password);
      if (checkPassword) {
        req.session.newUser = user.name;
        req.session.user_id = user.id;
        req.session.save(() => {
          res.redirect('/')
        });
      } else {
        res.send('Неверный пароль');
      }
    } else {
      res.send('Почта не найдена');
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;