const mongoose = require("mongoose");

const connectToDatabase = async () => {
    try {
        const URL_MONGO = process.env.URL_MONGO;
        await mongoose.connect(URL_MONGO)
    } catch (error) {
        res.status(500).json({ error: 'Failed to connect to the database', message: error.message });
    }
}

module.exports = connectToDatabase