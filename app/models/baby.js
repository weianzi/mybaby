var mongoose = require('mongoose');
var BabySchema = require('../schemas/baby');
var Baby = mongoose.model('Baby', BabySchema);

module.exports = Baby;