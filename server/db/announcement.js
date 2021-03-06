var mongoose = require('mongoose');

var announcementSchema = new mongoose.Schema({
    userName : String,
    userId : {type: String, default: ''},
    text: {type: String, default: ''},
    creationDate :  {type: Date, default: Date.now()}
});

module.exports = mongoose.model('announcementModel', announcementSchema);