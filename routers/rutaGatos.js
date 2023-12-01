const express = require('express')
const router = express.Router();

const gato = require('../model/gato');

router.get('/', async (req, res) => {

    try {
        const arrayGatosDB = await gato.find()
       // console.log(arrayGatosDB);
        res.render('gatos', {
                arrayGatos : arrayGatosDB
        })

    } catch (error) {
        console.log(error);
    }   
})

module.exports = router;