const express                    = require('express');

const router                     = express.Router();

const {greet,bookyourticket}     = require('../controllers/booking-controllers')

const {TicketsBookingValidation} = require('../middlewares/booking-Validation')

router.route("/greet").get(greet)

router.route('/bookyourticket',TicketsBookingValidation).post(bookyourticket)


module.exports                   = router