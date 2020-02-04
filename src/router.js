const router = require('express').Router();

const PadController = require('./Controllers/PadController');

  // router.get('/donuts/*', PadController.index);
  router.get('/', PadController.home);
  router.get('/*', PadController.render);

module.exports = router;