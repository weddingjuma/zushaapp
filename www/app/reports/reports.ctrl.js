(function(){
  'use strict';
  angular.module('app')
    .controller('ReportsCtrl', ReportsCtrl);

  function ReportsCtrl($scope, Reports){

    // do post
    $scope.PostReport = function() {
      // $scope.showToast();
      $location.path('app.reports');

      Reports
        .create({
          date : new Date().toJSON()

        })
        .$promise
        .then(function(err) {
        console.log(err)
        });
    };
  }
})();
