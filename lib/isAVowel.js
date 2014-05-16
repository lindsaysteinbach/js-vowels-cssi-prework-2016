'use strict';

module.exports = (function() {
  var isAVowel = function(lttr){
    var vowels = ['a','e','i','o','u'];
    return vowels.indexOf(lttr) >= 0
  };

  return isAVowel;
})();
