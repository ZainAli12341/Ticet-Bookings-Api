const mongoose            = require ('mongoose');
const TicketBookingSchema = mongoose.Schema(
{
    username:{
        type:               String,
        required:           [true,'Please enter a valid Username']
    },
    routesId:{
        type:               String
    },
    detailsForRoute:{
        type:               Object
    },
    departure:{
      type:                 String
        },
    arrival:{
        type:               String
    },
},
{
timestamps:                 true
}
)
module.exports            = mongoose.model('TicketsBooking',TicketBookingSchema)