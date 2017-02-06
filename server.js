const expressApp = require('./express-app')();
const googleController = require('./controllers/google')();

expressApp.use('/', googleController);

expressApp.listen(3000, function () {
  console.log('Proxy listening on port 3000!')
});