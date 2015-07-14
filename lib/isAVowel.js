'use strict';
$(function() {

var isAVowel = function(lttr){
  var vowels = ['a','e','i','o','u'];
  return vowels.indexOf(lttr) >= 0
};

// ###########################
// DO NOT EDIT BELOW THIS LINE
// ###########################

  $( "#target" ).submit(function( event ) {
    event.preventDefault();
    var input = $("#in").val();
    var result = isAVowel(input);
    $('#result').text(result);
  });
});
