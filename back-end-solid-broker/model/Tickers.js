const mongoose = require('mongoose');

const tickerSchema = new mongoose.Schema({
    ticker: String,
    name: String,
    currency: String
  });


module.exports = mongoose.model("ticker",tickerSchema);