'use strict';

var isAVowel = function(lttr){
  var result;

  if (lttr == "a" || lttr == "e" || lttr == "i" || lttr == "o" || lttr == "u") {
    result = true;
  }
  else {
    result = false;
  }
  
  return result; 
};

// ###########################
// DO NOT EDIT BELOW THIS LINE
// ###########################

$(function() {
  $( "#target" ).submit(function( event ) {
    event.preventDefault();
    var input = $("#in").val();
    var result = isAVowel(input);
    $('#result').text(result);
  });
});
