const expressApp = require('./express-app')();
const httpService = require('./services/http-service')();
const homeController = require('./controllers/home')(httpService);

expressApp.use('/', homeController);

expressApp.listen(3000, function () {
  console.log('Proxy listening on port 3000!')
});