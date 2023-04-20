const mongoose = require('mongoose');


const { Schema } = mongoose;

const rentalSchema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    renter: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    rentalDate: {
        type: Date,
        default: (Date.now)
    },
    rentalPeriod: {
        type: Number,
        default: 14 * 24 * 60 * 60 * 1000
    },
    returnDate: {
       type: Date,
        default: function () {
            return new Date(Date.now() + this.rentalPeriod);
        }
    }
});

const Rental = mongoose.model('Rental', rentalSchema);

module.exports = Rental;