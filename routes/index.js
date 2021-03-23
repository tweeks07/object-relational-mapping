const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.get('/', (req, res) => {
  return res.redirect('/api/products');
});

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;