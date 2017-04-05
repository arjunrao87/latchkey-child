$( "#unlockButton" ).click(function() {
  var code = $('#code').val();
  console.log( "Sending unlock post request with " + code );
  $.post( "http://localhost:3000/unlock", { code: code })
  .done(function( data ) {
    console.log( "Received response from server = " + data );
    if( JSON.stringify( data ).includes( "unlocked" ) ){
      
    }
  });
});
