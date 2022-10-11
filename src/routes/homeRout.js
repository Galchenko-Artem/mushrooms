const express = require('express');
const router = express.Router();

const Home = require('../views/Home');
const renderTemplate = require('../lib/renderTemplat');
const { Mushrooms } = require('../../db/models');

router.get('/', async (req, res) => {
    // получаем метки для карты  с базы, таблицы Mushrooms
    const mushroomMark = await Mushrooms.findAll({ attributes: ['title', 'location', 'id'], raw: true });
    const newUser = req.session?.newUser;
    renderTemplate(Home, { newUser, mushroomMark }, res);
  }).post('/', async (req, res) => {
    try {
      const mushroomMark = await Mushrooms.findAll({ attributes: ['title', 'location', 'id'], raw: true });
      res.json(mushroomMark);
    } catch (error) {
      console.log(error);
    }
  });

module.exports = router;