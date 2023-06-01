const express                                                   = require('express')
const router                                                    = express.Router()
const {sighnIn,sighnUp,logOut}                                  = require('../controllers/registration-controllers')
const {sighnupValidation,sighninValidation,logoutValidation}    = require('../middlewares/registration-Validation')
router.route('/sighnup',sighnupValidation).post(sighnUp)
router.route('/sighnin',sighninValidation).post(sighnIn)
router.route('/logout',logoutValidation).post(logOut)

module.exports                                                  = router;