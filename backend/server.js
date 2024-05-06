require('dotenv').config()
const express = require('express')
const Reservation = require ('./routes/reservationPath');
const userRoutes = require('./routes/user')
const app = express()
const mongoose = require('mongoose')






app.use(express.json())




mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    app.listen(process.env.PORT,(req,res)=>{
        console.log('the server is running on the ' + process.env.PORT)
    })
    
})
.catch((err)=>{
     console.log({message: err.message})
})





app.use('/reservation', Reservation) 
app.use('/user', userRoutes) 





