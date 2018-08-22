const mongoose = require('mongoose')

const users = new mongoose.Schema({
  documentId: {
    type: String
  },
  name: {
    type: String
  },
  email: {
    type: String
  },
  username: {
    type: String
  },
  password: {
    type: String
  },
  documentType: {
    type: String
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
  updatedDate: {
    type: Date,
    default: Date.now
  },
  isAdmin: {
    type: Boolean
  }
}, { collection: 'documents' })

module.exports = mongoose.model('Organizr', users)