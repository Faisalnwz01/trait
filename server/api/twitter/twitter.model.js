'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TwitterSchema = new Schema({
  data: String,
  watsonData: Array, 
  searchTerm: String
});

module.exports = mongoose.model('Twitter', TwitterSchema);