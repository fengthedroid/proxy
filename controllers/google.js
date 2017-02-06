const express = require('express');
const request = require('request');
const baseUrl = "https://www.google.com";

module.exports = () => {
  const router = express.Router();

  router.use('/', (req, res, next) => {
    const url = baseUrl + req.url;
    return req.pipe(request({ qs:req.query, uri: url })).pipe(res);
  });

  return router;
};