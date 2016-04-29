(function(){
'use strict'
angular
	.module('searchApp')
     .factory('searchService', function ($http){
   
  return {
    retrieveData : function(txt) {
         var link ="https://ajax.googleapis.com/ajax/services/feed/find?v=1.0&q=" + txt + "&callback=JSON_CALLBACK";
       
      return $http
        .jsonp(link)
        .error(function (status) {
            switch(status){
                case 401 : {
                    $scope.message = "Unauthorized !!!"
                    break;
                }
                case 400 : {
                    $scope.message = "Bad Request !!!"
                    break;
                }
                case 404 : {
                    $scope.message = "Not Found !!!"
                    break;
                }

                case 500 : {
                    $scope.message = "Internal Server Error !!!"
                    break;
                }

            }
          console.log("Error in retrieving data : " + status);
        });
    }}
});
})();    