'use strict';

require('dotenv').config();
const { db } = require('./models');
db.sync().then(() => {
require('./server').start(process.env.PORT);
});