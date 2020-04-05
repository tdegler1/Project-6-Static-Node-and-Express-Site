const express = require('express');
const router = express.Router();

// Projects is an array
const { projects } = require('../data.json');

//Set up the Home (index) route
router.get('/', (req, res) => {
  res.render('index', { projects });
});

//Set up the About route
router.get('/about', (req, res) => {
  res.render('about');
});

//Set up the Projects route
router.get('/projects/:id', (req, res, next) => {
  const id = req.params.id;
  if (isNaN(id)) {
    const error = new Error('Sorry, the project page requires a numeral for the ID.');
    error.status = 404;
    return next(error);
  } else if (id > projects.length - 1) {
    const error = new Error('Sorry, that project does not exist.');
    error.status = 404;
    return next(error);
  }
  const project = projects[id];
  res.render('project', {project});
});

module.exports = router;
