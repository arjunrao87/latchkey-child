$( "#getKey" ).click(function() {
  // Disable get key button for 5 seconds after pressing it
  $("#getKey").attr("disabled", "disabled");
  setTimeout(function() {
      $("#getKey").removeAttr("disabled");
  }, 5000);
  console.log( "Sending getKey post request" );
  $.post( "http://localhost:3000/key" )
   .done(function( data ) {
     console.log( "Received response from server = " + data );
     $('#key').val(data);
   });
});

$( "#unlockButton" ).click(function() {

  // Disable unlock button for 5 seconds after pressing it
  $("#unlockButton").attr("disabled", "disabled");
  setTimeout(function() {
      $("#unlockButton").removeAttr("disabled");
  }, 5000);

  // Retrieve key that was entered
  var key = $('#key').val();
  console.log( "Sending unlock post request with " + key );

  // Send post request to unlock door
  $.post( "http://localhost:3000/unlock", { key: key } )
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
        $("#result").empty();
      }, 5000);
    }
  });
});
