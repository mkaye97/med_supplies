const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }
  ],
  rentals: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Rental'
    }
  ],
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
