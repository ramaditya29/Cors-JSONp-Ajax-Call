(function(){
'use strict'
angular
  .module('searchApp')
  .controller('searchCtrl', function ($scope, searchService) 
  {
    $scope.search = function(srchTxt)
     {
       searchService.retrieveData($scope.srchTxt).then(function(response)
       {
       $scope.res=response.data.responseData.entries;
       }) 
     };
  });
})();      