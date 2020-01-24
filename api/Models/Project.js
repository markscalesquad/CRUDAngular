const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Product
let Project = new Schema({
  ProjectName: {
    type: String
  },
  ProjectDescription: {
    type: String
  }
}, {
  collection: 'Project'
});

module.exports = mongoose.model('Project', Project);