(function(){
  'use strict';
  angular.module('app')
    .controller('ReportCtrl', ReportCtrl);

  function ReportCtrl($scope, Reports, $stateParams){

    Reports
        .find({filter: {where: {id: $stateParams.id}}})
        .$promise
        .then(
        function (res) {
            $scope.report = res[0];

        },
        function (err) {

        });
  }
})();
