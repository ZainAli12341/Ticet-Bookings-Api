const mongoose        = require ('mongoose');
const BusRoutesSchema = mongoose.Schema(
    {
        from:{
            type:       String,
            required:   [true,'Please enter a valid from ']
        },
        
        to:{
            type:       String,
            required:   [true,'Please enter a valid to']
        },
        
        price:{
            type:       String,
            required:   [true,'please enter a valid price']
        },
        
    },
    {
    timestamps:          true
    }
    
    )

module.exports = mongoose.model('BusRoutes',BusRoutesSchema)