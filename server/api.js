// Incoming requests
function homepage(){
    return "You have reached the LatchkeyServer...";
}

function data( days ){
  return "Retrieving data for the last " + days + " days.";
}

function code( request ){
  return "Generating code...";
}

function unlock( code ){
  return "The door is being unlocked with the code " + code  + " ! ";
}

// Outgoing requests

module.exports = {
  homepage : homepage,
  code : code,
  data : data,
  unlock : unlock
};
