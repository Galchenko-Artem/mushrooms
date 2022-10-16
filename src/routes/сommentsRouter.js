const express = require('express');
const db = require('../../db/models');

const router = express.Router();
const renderTemplate = require('../lib/renderTemplat');
const Comment = require('../views/Сomment')

router.post('/', async (req, res) => {

  try {
    // Получили с бд данные о чае по id
    const comments = await db.Comment.findOne({ where: { id: 1 }, raw: true });
    console.log("▶ ⇛ comments", comments);
    res.send(comments)
    // const toRender = JSON.stringify(result, null);
    // Передали данные о чае пропсом в рендер
    // renderTemplate(TeaDescr, { result, newUser }, res);
  } catch (err) {
    console.log(err);
  }
})



module.exports = router;