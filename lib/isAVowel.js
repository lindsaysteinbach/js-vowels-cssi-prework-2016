'use strict';
var isAVowel = function(lttr){
  var vowels = ['a','e','i','o','u'];
  return vowels.indexOf(lttr) >= 0
};

$(function() {
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