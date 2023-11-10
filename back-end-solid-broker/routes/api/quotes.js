const express = require('express');
const router = express.Router();
const Quotes = require('../../model/Quotes')

router.route('/quotes')
    .get( async (req, res) => {

        Quotes.find({}).then((quotes)=>{
            console.log(quotes); 
            res.status(201).send(quotes) }).
            catch ((err) => {
                res.status(400).json(err)});
    })

module.exports = router;