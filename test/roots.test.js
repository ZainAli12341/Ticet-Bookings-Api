const { describe }                = require('node:test')
const {allRoutes}                 = require('../controllers/roots-controllers')
const { request }                 = require('http')
describe('POST/allRoutes', () => {
    test('Should return a proper route in my db', async () => {
      const response              = await request(allRoutes)
        .post('/ticketseasy/api/v1/viewroutes/allroutesWithPrice')
        .send({
          from:                     'input dalain kro check',
          to:                       'input dalain kro check',
          price:                    'input dalain kro check'
        });
  
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('from');
      expect(response.body).toHaveProperty('to');
      expect(response.body).toHaveProperty('price');
    
    });
  });