const BusRoutes = require('../models/roots-models')
const TicketsRegistration=require('../models/registration-models')
const TicketsBooking = require('../models/booking-models')
const routeCreation = async(from,to,price)=>{
    let result = await BusRoutes.create({
            from: from,
            to: to,
            price:    price    
    })
    console.log(result)
}
const bookticket = async(username,routes,departure,arrival)=>{
     
   const result = await TicketsBooking.create({
        username: username,
        routes:   routes,
        departure: departure,
        arrival:   arrival
    })
    return  result
    
}
const roots = async(param)=>{
    const findRoutes = await BusRoutes.findOne({_id:param})
    return findRoutes
 } 

const allrootsdetails = async()=>{
    const find  =await BusRoutes.find ()
    return find
}

const getOneroot  = async(id)=>{
    const oneRoot =  await BusRoutes.findById({
        _id: id
      })
    return oneRoot  
}


const checkUser = async (email)=>{
    const result   =   await TicketsRegistration.findOne({ email: email })
    return result
}

const userCreation =async(email,username,password)=>{
    const result=   await TicketsRegistration.create({
        email: email,
        password: password,
        username: username
    });
    return result
} 
module.exports  = {routeCreation,bookticket,roots,allrootsdetails,getOneroot,checkUser,userCreation}