const mongoose = require('mongoose');

const { Schema } = mongoose;

const charitySchema = new Schema({
  charityName: {
    organization: String,
    default: false
  },
  description: [
    {
      type: String,
      minlength: 1,
      maxlength: 255
    }
  ]
});

const Charity = mongoose.model('Charity', charitySchema);

module.exports = Charity;
