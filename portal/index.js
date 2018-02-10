
require('lodash');
// Register application module
const application = require('./app');

// Register modules.
require('./layout')(application);
require('./shared')(application);
require('./home')(application);

