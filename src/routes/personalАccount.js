const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();

const renderTemplate = require('../lib/renderTemplat');
const PersonalAccount = require('../views/PersonalАccount')
const { Mushrooms, User } = require('../../db/models');

router.get('/',  (req, res) => {
    const user = req.session?.newUser;
    if(user)
    renderTemplate(PersonalAccount, {newUser: user}, res);
});
 
router.post('/', async (req, res) => {
    const {title, descriptions, location, imgLink} = req.body;
    console.log('===========',title)
    try {
        await Mushrooms.create({title, descriptions, location, imgLink});
        res.redirect('/personal')
    } catch (error) {
        res.send(`Error ------> ${error}`);
    }
})

module.exports = router;