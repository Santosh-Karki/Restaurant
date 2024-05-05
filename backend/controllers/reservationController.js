
const express = require('express');

const Model = require('../model/reservationModel');

const mongoose= require('mongoose')


// get request

const getReservation = async (req,res) =>{
    const user_id = req.user._id
    const get = await Model.find({user_id}).sort({createdAt: -1})
    res.status(200).json(get);
}



// get request by id

 const getReservationId = async(req, res)  =>{
     const{ id } = req.params

     if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({eror: 'There is no reservation under this name'})
     }

     const getId = await Model.findById(id)

     if (!getId){
        return res.status(400).json({eror: 'There is no reservation under this name'})

     }
    
        res.status(200).json(getId)
     }
    
    

// post request 

const postReservation = async(req, res)=>{

    const{name, email, people, date} = req.body

    try{
        const user_id = req.user._id
        const post = await Model.create({name, email, people, date, user_id})
    res.status(200).json(post)
    }
    catch(err){
        res.status(400).json({message: err.message})
    } 

}


// delete request

const deleteReservation = async(req, res)=>{
    const{id } = req.params
     
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json("id type does not match")

    }
        const deletee = await Model.findOneAndDelete({_id:id})

  if(!deletee){
    
   return res.status(400).json('No such id')
  
  } 
 res.status(200).json(deletee)
  
}

// update request

const updateReservation = async(req, res)=>{

    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json('id types does not match')
    }

    const update = await Model.findOneAndUpdate({_id:id}, {
        ...req.body
    })

    if(!update){
        return res.status(400).json('reservation does not exist')
    }
    res.status(200).json(update)


}









module.exports = {
    postReservation,
    getReservation,
    getReservationId,
    deleteReservation,
    updateReservation

}

