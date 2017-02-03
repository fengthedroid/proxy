const expressApp = require('./express-app')();
const homeController = require('./controllers/home')();

expressApp.get('/', homeController);

expressApp.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});