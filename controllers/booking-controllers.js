const TicketsBooking = require('../models/booking-models')
const BusRoutes      = require('../models/roots-models')
const {bookticket,roots} = require('../adapters/roots-adapters')
const greet = async(req,res) => {
    res.status(200).send("HELLO USER WELCOME TO TICKET EASY BRO !")
}

const bookyourticket = async(req,res) => {
    const yourRoute = await roots(req.body.routes)
    const result = await bookticket(req.body.username,req.body.routes,req.body.departure,req.body.arrival)
    console.log(result)
    const str="Ticket has been booked for "
    res.status(200).json({"Status":str,"Username": req.body.username, "route": yourRoute })}

module.exports = {greet,bookyourticket}