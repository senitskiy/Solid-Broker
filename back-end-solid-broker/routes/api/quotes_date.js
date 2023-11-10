const express = require('express');
const router = express.Router();
const Quotes = require('../../model/Quotes')

router.route('/quotes/:date')
    .get( async (req, res) => {
        const reqDate = new Date(req.params.date);
        const page = parseInt(req.query.page) || 1; // Номер страницы, по умолчанию 1
        const limit = parseInt(req.query.limit) || 10; // Количество элементов на странице, по умолчанию 10

        Quotes.find({ date: reqDate})
            .skip((page - 1) * limit) // Пропустить элементы на предыдущих страницах
            .limit(limit) // Получить необходимое количество элементов
            .then((quotes)=>{
                console.log(quotes); 
                res.status(201).send(quotes) }).
                catch ((err) => {
                    res.status(400).json(err)});
    })

module.exports = router;