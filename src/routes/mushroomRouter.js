const express = require('express');
const db = require('../../db/models');

const router = express.Router();
const renderTemplate = require('../lib/renderTemplat');
const MushroomDescr = require('../views/MushroomDescript');


router.get('/:id', async (req, res) => {
  const newUser = req.session?.newUser;
  // Получаем id чая методом GET
  const mushrumId = req.params.id;
  try {
    // Получили с бд данные о чае по id
    const result = await db.Tea.findOne({ where: { id: mushrumId }, raw: true });
    const comments = await getComments(mushrumId)
    console.log("▶ ⇛ comments", comments);
    // Передали данные о чае пропсом в рендер
    renderTemplate(MushroomDescr, { result, newUser, comments }, res);
  } catch (err) {
    console.log(err);
  }
  // console.log('COMMENTS', commentAndUser);
  // console.log('COMMENTS', JSON.stringify(commentFromDb));
});

// Получили массив обьектов с БД таблицы Commit
async function getComments(mushrumId) {
  try {

    const commentFromDb = await db.Mushrooms.findAll({
      where: { id: mushrumId },
      attributes: [],
      include: { model: db.Comment, attributes: ['id', 'body', 'user_id'] },
      raw: true,
    });
    console.log('ONE COMMENTS', commentFromDb);

    const arr = []
    for (let el of commentFromDb) {
      const nameFromDb = await db.User.findOne({
        where: { id: el['Comments.user_id'] },
        attributes: ['name'],
        raw: true,
      });
      const commObj = {}
      commObj.id = el['Comments.id']
      commObj.body = el['Comments.body']
      commObj.usName = nameFromDb.name
      arr.push(commObj)
    }
    console.log('END_________', commentFromDb)
    return arr
  } catch (error) {
    return false
  }

}


module.exports = router;