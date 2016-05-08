'use strict';

var isAVowel = function(lttr){
  if (lttr == "a") {
    return "true";
  } else if (lttr == "e") {
    return "true";
  } else if (lttr == "i") {
    return "true";
  } else if (lttr == "o") {
    return "true";
  } else if (lttr == "u") {
    return "true";
  } else {
    return "false";
  }
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
