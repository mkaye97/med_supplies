const mongoose = require('mongoose');
const dayjs = require('dayjs');

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
        default: () => dayjs().toDate()
    },
    rentalPeriod: {
        type: Number,
        default: 14
    },
    returnDate: {
       type: Date,
        default: function () {
            return dayjs().add(this.rentalPeriod, 'day').toDate();
        }
    }
});

const Rental = mongoose.model('Rental', rentalSchema);

module.exports = Rental;