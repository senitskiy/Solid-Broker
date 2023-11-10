const mongoose = require('mongoose');

const quotesSchema = new mongoose.Schema({
    ticker: String,
    date: Date,
    price: Number
  });


module.exports = mongoose.model("quotes", quotesSchema);