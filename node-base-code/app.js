require('@babel/register');
require('@babel/polyfill');
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
import swaggerUi from 'swagger-ui-express';
import routes from './routes/index';
import ResponseHelper from './helpers/response.helper';
import { setupConnection } from './database/connection/db.connect';
import logger from './helpers/logger.helper';
const swaggerDocument = require('./docs/swagger.json');
const app = express();

// view engine setup if required we can implement it
/*
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
*/
logger.logInfo('any message', { data: 'hi' })
logger.logError('any message', { data: 'hi' })
logger.logDebug('any message', { data: 'hi' })

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
new ResponseHelper().init(app);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, DELETE, GET, POST");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

const opts = {
  explorer: false,
  swaggerOptions: {
    validatorUrl: null
  },
  customSiteTitle: 'Node Socket - Backend REST Service',
  customfavIcon: 'https://intro.torum.com/favicon.ico'
};

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, opts));

app.get('/', (req, res) => {
  res.redirect('/docs');
});

(async function () {
  try {

    await setupConnection();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
routes.initializeRoutes(app)
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
