const request = require('supertest');
const Products = require('./products-model');
const db = require('../data/dbConfig');
const { add } = require('./products-model');

describe('product model', () => {
    it ('should set eniroment to testing', () => {
        expect(process.env.DB_ENV).toBe('testing');
    });

    describe('add()', () => {
        it('should add the provided product', async  () => {
         await add({ name: 'rice'});

         const products = await db('products');


         expect(products).toHaveLength(1);

        });
    });
});

describe('POST/products', () => {
    it('should get 201 status code if complete', () => {
        const game = { price: '25.00', location: 'USA '};
        return request(products)
            .post('/products')
            .send(product)
            .expect(201)
    });

    it('getting a 422 when genre is missing', () => {
        const product = {location: 'londen'};
        return request(productModel)
        .post('/products')
        .send(product)
        .expect(422)
    });

    it('getting 422 status code if title is missing', () => {
        const product = { description:'raw foods' };
        return request(product)
            .post('/products')
            .send(product)
            .expect(422)
    });
})