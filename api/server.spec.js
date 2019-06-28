const supertest = require('supertest');
const request = require('supertest');
const db = require('../data/dbConfig')
const server = require('./server.js');
const authRouter = require('../auth/auth-router.js');



describe('server.js', () => {
    describe('GET /', () => {
        it('should return 200 ok' , () => {
            return supertest(server)
                .get('/')
                .expect(200);
                });
        });

            it('responds with 200 ok', async () => {
                return supertest(server)
                .get('/')
                .expect(200);
            });

            it('responds with 200 OK,' , async () => {
                await supertest(server)
                .get('/')
                .expect('Content-Type', /json/i)
            });

            it('should return JSON', async () => {
                const res = await supertest(server).get('/');
                expect(res.type).toBe('application/json');
            });

            it('should return 200 using async/await', async () => {
                const res = await supertest(server).get('/');
                expect(res.status).toBe(200);
            });

            
            
            
    
            });


           

describe
       

