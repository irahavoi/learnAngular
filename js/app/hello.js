/**
 * Created by irahavoi on 6/5/2015.
 */
var myAppModule = angular.module('myApp', []);
myAppModule.controller('HelloWorldController', function($scope){
    $scope.result = 'Hello, Angular!';

    $scope.changesCount = 0;
    $scope.updateChangeCounter = function(){
        $scope.changesCount++;
    }
});