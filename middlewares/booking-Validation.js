const {bookyourticket}       = require('../controllers/booking-controllers')
const yup                    = require('yup')
const TicketBookingSchema    = yup.object({
username:               yup.string().required(),
routesId:               yup.string().required(),
detailsForRoute:        yup.object(),
departure:              yup.string().required(),
arrival:                yup.string().required() 
   
})

const TicketsBookingValidation = TicketBookingSchema.validate(bookyourticket,{abortEarly:false,stripUnknown:true})

module.exports                 = {TicketsBookingValidation}