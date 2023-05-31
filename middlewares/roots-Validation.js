const {allRoutes}             = require('../controllers/roots-controllers')

const yup                     = require('yup')

const routesPostingSchema     = yup.object({
    from:                       yup.string().required(),
    to:                         yup.string().required(),
    price:                      yup.string().required()
})


const routesPostingValidation = routesPostingSchema.validate(allRoutes,{abortEarly:false,stripUnknown:true})

module.exports                = {routesPostingValidation}