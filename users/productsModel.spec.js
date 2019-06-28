const request = require('supertest');
const Products = require('./products-model');
const db = require('../data/dbConfig');
const { add } = require('./products-model');

describe('product model', () => {
    beforeAll(async () => {
        await db('products').truncate();
    });

    // it ('should set eniroment to testing', () => {
    //     expect(process.env.DB_ENV).toBe('testing');
    // });

    describe('add()', () => {
        it('should add the provided product', async  () => {
         await add({ name: 'rice' });
        
         const products = await db('products');

         expect(products).toHaveLength(1);

        });

        it('should insert the provided product', async () => {
            const product = { name: 'beads'};
            let added = await add(product);
            expect(added.name).toBe(product.name);

            products = { name: " oils"}
            added = await add(product);
            expect(added.name).toBe(product.name);
        });
    });

    describe('findById()', () => {
        it('find a product by id', async () => {
            await db('products').insert([
                { name : 'peas'},
                { name : 'beads'}
            ]);
            const product = await Products.findById
            (2);

            expect(product.name).toBe('beads');
        });

        
    }) ;


});

