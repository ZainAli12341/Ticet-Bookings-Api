const request                   = require('supertest');
const {sighnUp,sighnIn,logOut}  = require('../controllers/registration-controllers');


describe('POST /signup', () => {
    test('should create a new user and return a JWT token', async () => {
      const response            = await request(sighnUp)
        .post('/ticketseasy/api/v1/registration/signup')
        .send({
          username:              'input dalain kro check',
          password:              'input dalain kro check',
          email:                 'input dalain kro check',
        });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('token');
    });

   
describe('POST /signin', () => {
  test('should return a JWT token for a valid user', async () => {
      const response            = await request(sighnIn)
        .post('/ticketseasy/api/v1/registration/signin')
        .send({
          email:                 'input dalain kro check',
          password:              'input dalain kro check',
        });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('token');
    
    });
  });
});

describe('POST/logout', () => {
  test('should return a JWT token for a valid user', async () => {
    const response              = await request(logOut)
      .post('/ticketseasy/api/v1/registration/logout')
      .send({
        email:                   'input dalain kro check',
        password:                'input dalain kro check',
      });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('token');
    
  });
});

