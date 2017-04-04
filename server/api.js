// Incoming requests
function homepage(){
    return "You have reached the LatchkeyServer...";
}

function unlockDoor(){
  return "The door is being unlocked!";
}

// Outgoing requests

module.exports = {
  homepage : homepage
};
