const supertest = require('supertest');
const request = require('supertest');
const db = require('../data/dbConfig')
const server = require('../api/server');





describe('GET /products', () => {

    it('should return all products in db', async () => {
        const products = [
            { name : 'peas'},
            { name : 'beads'}
        ];

        const productsIds = products.map((product, i) => {
            return { name: products.name, id: i+1 };
        });
    });
});



    

