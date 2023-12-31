const mongoose = require('mongoose')


const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    post: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Articles', articleSchema);