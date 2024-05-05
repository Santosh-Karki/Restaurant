const mongoose = require('mongoose')

const Schema = mongoose.Schema

const reservationSchema = new Schema({
    name:{
        type: String,
        required: true
    },

    email:{
        type: String,
        required: true
    },
    people:{
        type: Number,
        required: true
    },
    date:{
        type: Date,
        required: true
    },
    user_id: {
        type: String,
        required: true
      }
})


module.exports = mongoose.model('Reservation', reservationSchema)