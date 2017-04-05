$( "#unlockButton" ).click(function() {

  // Disable unlock button for 10 seconds after pressing it
  $("#unlockButton").attr("disabled", "disabled");
  setTimeout(function() {
      $("#unlockButton").removeAttr("disabled");
  }, 10000);

  // Retrieve code that was entered
  var code = $('#code').val();
  console.log( "Sending unlock post request with " + code );

  // Send post request to unlock door
  $.post( "http://localhost:3000/unlock", { code: code })
  .done(function( data ) {
    console.log( "Received response from server = " + data );
    // Display result of post request
    if( JSON.stringify( data ).includes( "unlocked" ) ){
      $( "#result" ).text( " The door is now unlocked..." );
      setTimeout(function() {
        $("#result").empty();
      }, 5000);
    } else{
      $( "#result" ).text( "Door did not unlock. Nice try intruder!" );
      setTimeout(function() {
        $("#result").fadeOut().empty();
      }, 5000);
    }
  });
});
