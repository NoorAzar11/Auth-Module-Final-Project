'use strict';
// 3rd party resoursec
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const logger = require('./middleware/logger');
const authroutes = require('./routes/routes');
const v1Routes = require('./routes/v1');
const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get('/', (req, res) => {
  res.status(200).send('Hello World')
})

app.use(logger);
app.use(authroutes);
app.use('/api/v1', v1Routes);
app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
  server: app,
  start: (port) => {
    if (!port) {
      throw new Error('Missing Port');
    }
    app.listen(port, () => console.log(`Listening ${port}`));
  },
};