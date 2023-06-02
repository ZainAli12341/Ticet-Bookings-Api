const {sighnUp,sighnIn,logOut} = require('../controllers/registration-controllers')

const yup                      = require('yup')

const userssinghnupSchema      = yup.object({
    email:      yup.string().email().required(),
    password:   yup.string().required(),
    username:   yup.string().required()
})

const userssinghninSchema      = yup.object({
    email:      yup.string().email().required(),
    password:   yup.string().required()
    }).required()

const userslogoutSchema        = yup.object({
    email:      yup.string().email().required(),
    password:   yup.string().min(8).max(12).required()
    }).required()

const sighnupValidation        = userssinghnupSchema.validate(sighnUp,{abortEarly:false,stripUnknown:true})
const sighninValidation        = userssinghninSchema.validate(sighnIn,{abortEarly:false,stripUnknown:true})
const logoutValidation         = userslogoutSchema.validate(logOut,{abortEarly:false,stripUnknown:true})

module.exports                 = {sighnupValidation,sighninValidation,logoutValidation}