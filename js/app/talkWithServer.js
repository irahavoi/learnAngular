/**
 * Created by irahavoi on 6/8/2015.
 */
/**
 * Created by irahavoi on 6/5/2015.
 */
var myAppModule = angular.module('myApp', []);

myAppModule.controller('ServerTalkController', function($scope, $http){
    $scope.getInfoFromServer = function(){
        $http.get($scope.url, {params :{id : 0}})
            .success(function(data, status, headers, config){
                $scope.serverResponse = 'Success! Response Status: ' + status ;
                $scope.responseData = data;
                $scope.invalidUrl = false;

            }).error(function(data, status, headers, config){
                $scope.invalidUrl = true;
                $scope.responseData = null;

                $scope.serverResponse =
                    'Error occurred when trying to send a request for the url "' +
                        $scope.url +
                    "! Error status: " +
                        status;
            });
    }

});

