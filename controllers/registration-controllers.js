const bcrypt        = require('bcrypt')
const jwt           = require('jsonwebtoken')
const { error }     = require('console')
const TicketsRegistration=require('../models/registration-models')
const { match }     = require('assert')
const SECRET_KEY    = "HELLOOHANJI"
const saltRounds    = 10;
const sighnUp = async(req,res) => {

    let { email , password, username } = req.body

    try{
        const existingUser = await TicketsRegistration.findOne({ email: email })
        if(existingUser){
            return res.status(400).json({ message: "User already exists" })
        }

        let salt           = await bcrypt.genSalt(saltRounds)
        let hashedPassword = await bcrypt.hash(password , salt)

        const result       = await Register.create({
            email: email,
            password: hashedPassword,
            username: username
        });

        const token        = jwt.sign({
            email: result.email,
            id: result._id
        },SECRET_KEY);

        res.status(201).json({
        //    user: result,
            token: token
        })
    }
    catch(e){
        console.error(e)
        res.status(500).json({ message: "Something went wrong" })
    }

}
 
const sighnIn              = async(req,res) => {
const { email, password }  = req.body
    try {
        const existingUser = await TicketsRegistration.findOne({ email: email });
        if(!existingUser){
            return res.status(404).json({ message: "user not found " })
        }
        let matchPassword  = await bcrypt.compare(password,existingUser.password);
        if(!matchPassword){
            return res.status(400).json({ message: "invalid credentials" })
        }
        const token        = jwt.sign({
            email: existingUser.email,
            id: existingUser._id
        },SECRET_KEY)

        res.status(201).json({
         //   user: existingUser,
            token: token
        })
        }
    catch(e){
        console.error(e)
        res.status(500).json({ message: "Something went wrong" })
    }
}   
const logOut               =  async(req,res) => {
const { email, password }  = req.body
    try {
        const existingUser = await TicketsRegistration.findOne({ email: email });
        if(!existingUser){
            return res.status(404).json({ message: "user not found " })
        }
        let matchPassword  = await bcrypt.compare(password,existingUser.password);
        if(!matchPassword){
            return res.status(400).json({ message: "invalid credentials" })
        }
        const token        = jwt.sign({
            email: existingUser.email,
            id: existingUser._id
        },SECRET_KEY)

        res.status(201).json({
         //   user: existingUser,
            token: token
        })
        }
    catch(e){
        console.error(e)
        res.status(500).json({ message: "Something went wrong" })
    }



}

module.exports            = {sighnUp,sighnIn,logOut}

 
