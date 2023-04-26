const mongoose = require('mongoose');

const { Schema } = mongoose;

const donationSchema = new Schema({

 amount: {
    type: Number,
    required: true,
  },
  user_id: {
   type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
    charity_id: {
    type: Schema.Types.ObjectId,
    ref: 'Charity',
    required: true
  }
});

const Donation = mongoose.model('Donation', donationSchema);

module.exports = Donation;