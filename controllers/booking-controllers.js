const TicketsBooking = require('../models/booking-models')
const BusRoutes      = require('../models/roots-models')

const greet          = async(req,res) => {
    res.status(200).send("HELLO USER WELCOME TO TICKET EASY BRO !")
}

const bookyourticket = async(req,res) => {
    const {username,routes,departure,arrival} = req.body
    const yourRoute  =    await BusRoutes.findOne({id:routes});
    const result     =    await TicketsBooking.create({
        username:         username,
        routes:           "routes",
        detailsForRoute: {"Ticket has been booked for":yourRoute },
        departure:        departure,
        arrival:          arrival
    })
    console.log(result)
    res.status(200).json({"Status": "Ticket has been booked for ","Username": result.user, yourRoute })}

module.exports       =   {greet,bookyourticket}