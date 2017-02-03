const router = require('express').Router();

module.exports = () => {
  router.get('/', (req, res, next) => {
    res.send('alive');
  });

  return router;
};