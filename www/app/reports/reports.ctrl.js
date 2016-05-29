(function() {
  'use strict';
  angular.module('app')
    .controller('ReportsCtrl', ReportsCtrl);

  function ReportsCtrl($scope, Reports, $location, $ionicPopup) {
    $scope.reports = {};
    $scope.showToast = function() {
      // <!-- ionicToast.show(message, position, stick, time); -->
      ionicToast.show('Your Data is Anonymous with Us.', 'bottom', false, 3800);
    };
    $scope.showPopup = function(title, errorMsg) {
      var alertPopup = $ionicPopup.alert({
        title: 'Report Posted, Thank You! Chill kiac, We Will Send You Airtime in a while :)',
        template: errorMsg
      });
      alertPopup.then(function() {
        // console.log();
      });
    };
    $scope.gotoreports = function() {
      // $location.path('app.reports');
      ui.sref('app.profile');
    };
    // do post
    $scope.PostReport = function() {
      $scope.showPopup();
      $scope.showToast();
      $scope.gotoreports();
      // $location.path('app.reports');
      Reports
        .create({
          date: new Date().toJSON(),
          numberplate: $scope.reports.numberplate,
          sacco: $scope.reports.sacco,
          from: $scope.reports.from,
          to: $scope.reports.to,
          problem: $scope.reports.problem
        })
        .$promise
        .then(function(err) {
          console.log(err)
        });
    };
    $scope.reports = Reports.find({});
    $scope.refresh = function() {
      $scope.reports = Reports.find({});
    }
    console.log($scope.reports);
  }
})();
