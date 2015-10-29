angular.module('app.login', ['lbServices', 'ionic'])
    .controller('SigninCtrl', function ($scope, User, $location, $ionicPopup, $ionicLoading) {
        if (User.getCachedCurrent()!==null) {
           $location.path('app/tabs/twitts');
        }
        /**
         * Currently you need to initialiate the variables
         * you use whith ng-model. This seems to be a bug with
         * ionic creating a child scope for the ion-content directive
         */
        $scope.credentials = {};

       // Add Loading while it sends data and waits
       $scope.showAlert = function(title, errorMsg) {
           var alertPopup = $ionicPopup.alert({
               title: title,
               template: errorMsg
           });
           alertPopup.then(function(res) {
               console.log($scope.loginError);
           });
       };
        /**
         * @name showAlert()
         * @param {string} title
         * @param  {string} errorMsg
         * @desctiption
         * Show a popup with the given parameters
         */
        $scope.showAlert = function (title, errorMsg) {
            var alertPopup = $ionicPopup.alert({
                title: title,
                template: errorMsg
            });
            alertPopup.then(function (res) {
                console.log($scope.loginError);
            });
        };

        /**
         * @name login()
         * @description
         * sign-in function for users which created an account
         */
        $scope.login = function () {
            $scope.loginResult = User.login({include: 'user', rememberMe: true}, $scope.credentials,
                function () {
                    var next = $location.nextAfterLogin || 'app/tabs/twitts';
                    $location.nextAfterLogin = null;
                    $location.path(next);
                },
                function (err) {
                    $scope.loginError = err;
                    $scope.showAlert(err.statusText, err.data.error.message);
                }
            );
        };
        $scope.goToRegister = function () {
            $location.path('register');
        };


    });
