(function() {
  'use strict';
  angular.module('app')
    .controller('ProfileCtrl', ProfileCtrl);

  function ProfileCtrl($state, User, $scope) {
    $scope.currentUser = User.getCurrent();

    /**
     * @name logout()
     * logout user and redirect to the login page
     */
    $scope.logout = function() {
      User.logout(function() {
        $location.path('/signin');
      });
    }
  }
})();
