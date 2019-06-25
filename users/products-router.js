const router = require('express').Router();

const Products = require('./products-model');
const Users = require('./users-model');
const db = require('../data/dbConfig');

router.get('/', (req, res ) => {
  console.log(';;;;;;;;;;;;;;;; in get products');
    Products.find()
        .then(products => {
          console.log(';;;;;;;;;;;;;;;;;;' + products);
            res.status(200).json(products);
        })
        .catch(err => {
            res
                .status(500)
                .json( {message: 'Not able to fetch your Products Now'});
        });
});
 
router.get("/:id", (req, res) => {
    const { id } = req.params;
    db("products")
      .where({ id: id })
      .first()
      .then(products => {
        db("products")
          .where({ id })
          .then(users => {
            products.users = users;
            return res.status(200).json(products);
          });
      })
      .catch(err => {
        res.status(500).json({ Error: "There was an error getting that" });
      });
  });

router.post('/', async (req, res) => {
  console.log(';:::::::::::inside the server::::::::')
    const products = req.body;
    if (products.name) {
      try {
        const inserted = await Products.add(products);
        res.status(201).json(inserted);
      } catch (error) {
        console.log(error);
        res
          .status(500)
          .json({ message: 'We ran into an error creating the products' });
      }
    } else {
      res.status(400).json({ message: 'Please provide name of Products' });
    }
  });

module.exports = router;