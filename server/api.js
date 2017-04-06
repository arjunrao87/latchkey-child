var logger = require('winston');

// Global variables
var generatedKey = undefined;

// Incoming requests
function homepage(){
    return "You have reached the LatchkeyServer...";
}

function data( days ){
  return "Retrieving data for the last " + days + " days.";
}

function key( request ){
  if( generatedKey === undefined ){
    generatedKey = generateKey();
    setInterval(generateNewKey, 300*1000);
    logger.info( "Set to refresh the generated key every 5 minutes." );
  }
  return sendKeyToUser( generatedKey );
}

function unlock( key ){
  if( isValidKey( key ) ){
    logger.info( "Valid key entered. Proceeding to unlock door." );
    unlock();
    return "The door is being unlocked! ";
  } else{
    return "Incorrect key entered. Nice try intruder!";
  }
}

function unlock(){
  //TODO : This is where the GPIO signal gets generated
}

function generateNewKey(){
    logger.info( "Time to generate a new key" );
    generatedKey = generateKey();
}

function generateKey() {
      return Math.floor(Math.random()*8999+1000);
}

function isValidKey( userKey ) {
  var magicKey = process.env.DA_MAGIC_KEY;
  var actualKey = "" + magicKey + generatedKey;
  return actualKey === userKey;
}

function sendKeyToUser( key ){
  logger.info( "Generated key = " + key );
  return "Generated key = " + key;
}

// Outgoing requests

module.exports = {
  homepage : homepage,
  key : key,
  data : data,
  unlock : unlock
};
