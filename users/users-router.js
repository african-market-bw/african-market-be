const express = require('express');

const Users = require('./users-model');
const {authenticate} = require('../auth/authenticate.js');
// const Messages = require('../messages/messages-model.js')
const router = express.Router();

router.get('/', authenticate, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

// router.get('/', authenticate, (req, res) => {
//   Users.findPass()
//     .then(users => {
//       res.json(users);
//     })
    
//     .catch(err => res.send(err));
//     console.log(error);
// });

// // this only runs if the url has /api/users in it
// router.get('/', async (req, res) => {
//   try {
//     const users = await Users.find(req.query);
//     res.status(200).json(users);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       message: 'Error retrieving the Users',
//     });
//   }
// });


router.get('/:id', async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    // log error to server
    console.log(error);
    res.status(500).json({
      message: 'Error retrieving the User',
    });
  }
});

function validateBody(req, res, next) {
  if (req.body && req.body.name) {
    next();
  } else {
    res.status(400).json({ message: 'Please provide the name of the User' });
  }
}

router.post('/', validateBody, async (req, res) => {
  try {
    // validate body to make sure there is a name
    const user = await Users.add(req.body);
    res.status(201).json(user);
  } catch (error) {
    // log error to server
    console.log(error);
    res.status(500).json({
      message: 'Error adding the user',
    });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const count = await Users.remove(req.params.id);
    if (count > 0) {
      res.status(200).json({ message: 'The user has been nuked' });
    } else {
      res.status(404).json({ message: 'The user could not be found' });
    }
  } catch (error) {
    // log error to server
    console.log(error);
    res.status(500).json({
      message: 'Error removing the user',
    });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const user = await Users.update(req.params.id, req.body);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'The user could not be found' });
    }
  } catch (error) {
    // log error to server
    console.log(error);
    res.status(500).json({
      message: 'Error updating the user',
    });
  }
});

// add an endpoint that returns all the description for a users
// this is a sub-route or sub-resource
router.get('/:id/description', async (req, res) => {
  try {
    const description = await Users.findUsersDescription(req.params.id);

    res.status(200).json(description);
  } catch (error) {
    // log error to server
    console.log(error);
    res.status(500).json({
      message: 'Error getting the description for the user',
    });
  }
});

// add an endpoint for adding new message to a hub
router.post('/:id/description', async (req, res) => {
  const descriptionInfo = { ...req.body, user_id: req.params.id };

  try {
    const description = await Description.add(descriptionInfo );
    res.status(210).json(description);
  } catch (error) {
    // log error to server
    console.log(error);
    res.status(500).json({
      message: 'Error getting the description for the user',
    });
  }
});

module.exports = router;

