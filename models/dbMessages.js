const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const WhatsappSchema = new Schema({
    name:String,
    message:String,
    timestamp:String,
    received: Boolean
})



module.exports = mongoose.model('messagecontent', WhatsappSchema)