const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  /* jslint unparam: true */
  res.render('index', {
    title: 'Bare Bones Server',
  });
});

module.exports = router;
