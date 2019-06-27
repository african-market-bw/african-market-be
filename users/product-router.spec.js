const request = require('supertest');

const server = require('../api/server');
const Products = require('./products-router');


describe("productRouter.js", () => {
    it("should set testing environment", () => {
      expect(process.env.DB_ENV).toBe("testing");
    });
    describe('GET /Products', () => {
        it ('should return Products', async () => {
            const res = await request(server).get('/api/products');
            expect(res.status).toBe(200);
            // expect(res.body).toEqual({});
        });
    });
  });


