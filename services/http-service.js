const axios = require('axios');

module.exports = () => {
  const self = {
    get(url) {
      return axios.get(`https://${url}`);
    }
  };

  return self;
};