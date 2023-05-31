const BusRoutes                 = require('../models/roots-models')

const allRoutes                 = async (req,res) => {
    let {from,to,price}         = req.body
    const result                = await BusRoutes.create({
            from: from,
            to: to,
            price: price,    
    })
    console.log(result)
try {
    res.status(200).json({message: "route created"})
} 
catch (e) {
    res.status(500).json({message: "Error please try again"})
}
}

const showingallroutewithprice  =  async(req,res) => {
        const showAll = await BusRoutes.find()
        res.json({"All Routes ":showAll})


    }
const oneWayrouteprice          =   async(req,res)=>{
  const  {id} = req.params
  const findOne = await BusRoutes.findById({
    _id: id
  })  
  res.json({
    "Your selected route": findOne
  })

}


module.exports                  = {allRoutes,showingallroutewithprice,oneWayrouteprice}