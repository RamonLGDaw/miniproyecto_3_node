const express = require('express')
const router = express.Router();

const avion = require('../model/avion');

router.get('/', async (req, res) => {

    try {
        const arrayAvionesDB = await avion.find()
        //console.log(arrayAvionesDB);
        res.render('tabla', {
                arrayAviones : arrayAvionesDB
        })

    } catch (error) {
        console.log(error);
    }   
})

module.exports = router;