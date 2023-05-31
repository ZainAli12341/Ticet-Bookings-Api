const express   = require('express');

const connectDB = require('./config/db-connection')

const app       = express();

const dotenv    = require('dotenv').config();

const port      = process.env.PORT || 6000;

const colors    = require('colors');


app.use(express.json())

app.use(express.urlencoded({extended:false}))

app.use('/ticketseasy/api/v1/registration', require('./routes/registration-routes'))

app.use('/ticketseasy/api/v1/viewroutes',   require('./routes/travel-roots-routes'))

app.use('/ticketseasy/api/v1/bookTicket',   require('./routes/bookings-routes'))

app.listen(port,() => {console.log(`Server is listening on ${port}.......`.bgBlue.bold.underline.italic)})

connectDB();