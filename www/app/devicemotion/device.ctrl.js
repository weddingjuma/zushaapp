  (function(){
    'use strict';
    angular.module('app')
      .controller('DeviceCtrl', DeviceCtrl);

    function DeviceCtrl($cordovaDeviceMotion){
      document.addEventListener("deviceready", function() {

        $cordovaDeviceMotion.getCurrentAcceleration().then(function(result) {
          var X = result.x;
          var Y = result.y;
          var Z = result.z;
          var timeStamp = result.timestamp;
        }, function(err) {
          // An error occurred. Show a message to the user
        });

      }, false);


      // watch Acceleration
      var options = {
        frequency: 20000
      };

      document.addEventListener("deviceready", function() {

        var watch = $cordovaDeviceMotion.watchAcceleration(options);
        watch.then(
          null,
          function(error) {
            // An error occurred
          },
          function(result) {
            var X = result.x;
            var Y = result.y;
            var Z = result.z;
            var timeStamp = result.timestamp;
          });


        watch.clearWatch();
        // OR
        $cordovaDeviceMotion.clearWatch(watch)
          .then(function(result) {
            // success
          }, function(error) {
            // error
          });

      }, false);

    }
  })();
