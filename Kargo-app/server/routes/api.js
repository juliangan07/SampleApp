const express = require('express');
const router = express.Router();

// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

// Get all posts
router.get('/posts', (req, res) => {
    // Get posts from mock api
    axios.get(`${API}/posts`)
    .then(posts => {
        res.status(200).json(posts.data);
    })
    .catch(error => {
        res.status(500).send(error)
    });
});

// router.get('/posts/:id', (req, res) => {
//     // Get posts from mock api
//     res.params({id})
//     axios.get(`${API}/posts/${res.params}`)
//     .then(posts => {
//         res.status(200).json(posts.data);
//     })
//     .catch(error => {
//         res.status(500).send(error)
//     });
// });

module.exports = router;