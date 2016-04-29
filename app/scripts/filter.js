(function(){
'use strict'
 angular
    .module('searchApp')
    .filter('htmlToPlaintext', function() {
    return function(text) {
      return  text ? String(text).replace(/<[^>]+>/gm, '') : '';
    };
  }
);
})();        
