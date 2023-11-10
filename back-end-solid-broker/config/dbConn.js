const mongoose = require('mongoose');

const {
    DATABASE_USER = 'test',
    DATABASE_PASSWORD = 'test',
    DATABASE_HOST = 'localhost',
    DATABASE_PORT = '27017',
    DATABASE_NAME = 'solid',
} = process.env;

const mongoUrl = `mongodb://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}`;

const connectDB = async () => {
    try {
        await mongoose.connect(mongoUrl, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        }
        );
    } catch (err) {
        console.error(err);
    }
}

module.exports = connectDB