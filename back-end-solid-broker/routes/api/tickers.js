const express = require('express');
const router = express.Router();
const Tickers = require('../../model/Tickers')

router.route('/tickers')
    .get( async (req, res) => {

        Tickers.find({}).then((tickers)=>{
            console.log(tickers); 
            res.status(201).send(tickers) }).
            catch ((err) => {
                res.status(400).json(err)});
    })

module.exports = router;