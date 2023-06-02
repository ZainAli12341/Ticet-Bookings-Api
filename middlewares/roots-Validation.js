const {allRoutes}             = require('../controllers/roots-controllers')

const yup                     = require('yup')

const routesPostingSchema     = yup.object({
    from:                       yup.string(),
    to:                         yup.string(),
    price:                      yup.string()
})


const routesPostingValidation = routesPostingSchema.validate(allRoutes,{abortEarly:false,stripUnknown:true})

module.exports                = {routesPostingValidation}