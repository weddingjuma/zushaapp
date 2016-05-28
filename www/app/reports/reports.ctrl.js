(function() {
  'use strict';
  angular.module('app')
    .controller('ReportsCtrl', ReportsCtrl);

  function ReportsCtrl($scope, Reports) {
    $scope.reports = {};

    // do post
    $scope.PostReport = function() {
      // $scope.showToast();
      // $location.path('app.reports');

      Reports
        .create({
          date: new Date().toJSON(),
          numberplate: $scope.reports.numberplate,
          sacco: $scope.reports.sacco,
          from: $scope.reports.from,
          to: $scope.reports.to,
          driverstate: $scope.reports.driverstate,
          carstate: $scope.reports.carstate,
          problem: $scope.reports.problem



        })
        .$promise
        .then(function(err) {
          console.log(err)
        });
    };
  }
})();
