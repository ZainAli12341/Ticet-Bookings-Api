const {bookyourticket}            = require('../controllers/booking-controllers')

describe('POST/bookyourticket', () => {
    test('Should return a proper route in my db', async () => {
      const response              = await request(bookyourticket)
        .post('/ticketseasy/api/v1/bookTicket/bookyourticket')
        .send({
            username:         "input dalain kro check",
            routes:           "input dalain kro check",
            detailsForRoute: {"Ticket has been booked for":yourRoute },
            departure:        "input dalain kro check",
            arrival:          "input dalain kro check"
    
        });
  
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('username');
      expect(response.body).toHaveProperty('routes')
      expect(response.body).toHaveProperty('detailsForRoutes')
      expect(response.body).toHaveProperty('arrival')
    });
  });