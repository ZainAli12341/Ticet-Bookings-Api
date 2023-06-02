const {routeCreation,allrootsdetails,getOneroot} = require('../adapters/roots-adapters')
const BusRoutes = require('../models/roots-models')

const allRoutes = async (req,res) => {

  const result = routeCreation(req.body.from,req.body.to,req.body.price)
    console.log(result)
try {
    res.status(200).json({message: "route created"})
} 
catch (e) {
    res.status(500).json({message: "Error please try again"})
}
}

const showingallroutewithprice  =  async(req,res) => {
        const showAll = allrootsdetails()
        res.json({"All Routes ":showAll})


    }
const oneWayrouteprice = async(req,res)=>{

  const findOne = getOneroot(req.params.id)
  res.json({
    "Selected Route": findOne
  })

}
module.exports = {allRoutes,showingallroutewithprice,oneWayrouteprice}