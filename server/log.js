var logger = require('winston');
logger.add(logger.transports.File, { filename: "../logs/latchkey-server.log" });
module.exports=logger;
