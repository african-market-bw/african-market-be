const router = require('express').Router();

const Products = require('./products-model');
const Users = require('./users-model');
const db = require('../data/dbConfig');


router.get('/', (req, res ) => {
    Products.find()
        .then(products => {
            res.status(200).json(products);
        })
        .catch(err => {
            res
                .status(500)
                .json( {message: 'Not able to fetch your Products  Now'});
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
          users.users = users;
          return res.status(200).json(products);
        });
    })
    .catch(err => {
      res.status(500).json({ Error: "There was an error getting that" });
    });
});

router.patch('/:id', (req,res,next) => {
  res.status(200).json({
    message:"updated product"
  });
});

router.delete('/:id', (req, res) => {
  const product = req.param.product;
  res.status(200).json({
    message: 'Delete product',
  }) 
});

router.post('/', async (req, res) => {
  console.log(';:::::::::::inside the server::::::::');
    const product = req.body;
    if (product.name) {
      try {
        const inserted = await Products.add(product);
        res.status(201).json(inserted);
      } catch (error) {
        console.log(error);
        res
          .status(500)
          .json({ message: 'We ran into an error adding Product' });
      }
    } else {
      res.status(400).json({ message: 'Please provide name of Product' });
    }
  });


router.put('/:id', (req, res) => {
  const product = Products.find(p => p.id == req.params.id);

  if (!product) {
    res.status(404).json({ message: 'Product does not exist' });
  } else {
    
    Products.add(product);

    res.status(200).json({message: 'Product was updated'});
  }
});


module.exports = router;
