const router = require('express').Router();

const Products = require('./products-model');
const Users = require('./users-model');
const db = require('../data/dbConfig');

// this only runs if the url has /api/products in it


router.get('/', async (req, res) => {
  try {
    const products = await Products.find(req.query);
    res.status(200).json(products);
  } catch (error) {
    // log error to server
    console.log(error);
    res.status(500).json({
      message: 'Error retrieving the Products',
    });
  }
});

// /api/products/:id

router.get('/:id', async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);

    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    // log error to server
    console.log(error);
    res.status(500).json({
      message: 'Error retrieving the Produts',
    });
  }
});

function validateBody(req, res, next) {
  if (req.body && req.body.name) {
    next();
  } else {
    res.status(400).json({ message: 'Please provide the name of the Prouct' });
  }
}

router.post('/', validateBody, async (req, res) => {
  try {
    // validate body to make sure there is a name
    const product = await Products.add(req.body);
    res.status(201).json(product);
  } catch (error) {
    // log error to server
    console.log(error);
    res.status(500).json({
      message: 'Error adding the Product',
    });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const count = await Products.remove(req.params.id);
    if (count > 0) {
      res.status(200).json({ message: 'The product has been delete' });
    } else {
      res.status(404).json({ message: 'The product could not be found' });
    }
  } catch (error) {
    // log error to server
    console.log(error);
    res.status(500).json({
      message: 'Error removing the product',
    });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const product = await Products.update(req.params.id, req.body);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: 'The product could not be found' });
    }
  } catch (error) {
    // log error to server
    console.log(error);
    res.status(500).json({
      message: 'Error updating the product',
    });
  }
});


module.exports = router;

