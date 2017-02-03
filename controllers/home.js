const express = require('express');

module.exports = (httpService) => {
  const router = express.Router();

  router.get('/proxy/:url', (req, res, next) => {
    const url = req.params.url;

    return httpService.get(url)
      .then((response) => res.send(response.data))
      .catch(next);
  });

  return router;
};