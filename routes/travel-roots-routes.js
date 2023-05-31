const {allRoutes,showingallroutewithprice,oneWayrouteprice} = require('../controllers/roots-controllers')
const router                                                = require('./registration-routes')
const {entryPriceValidation}                                = require('../middlewares/roots-Validation')

router.route('/allroutesWithPrice',entryPriceValidation).post(allRoutes)

router.route('/allroutesWithPrice').get(showingallroutewithprice)

router.route('/singlerouteprice').get(oneWayrouteprice)


module.exports                                              = router