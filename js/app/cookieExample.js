/**
 * Created by irahavoi on 6/9/2015.
 */
var myAppModule = angular.module('myApp', ['ngCookies']);

myAppModule.controller('CookieController', ['$scope','$cookies','$cookieStore', function($scope, $cookies, $cookieStore){
    $scope.cookieToGet = null;
    $scope.$cookies = $cookies;

    $scope.put = function(){
        $cookieStore.put($scope.newCookieName,$scope.newCookieValue);
        $scope.newCookieName = '';
        $scope.newCookieValue = '';
    }

    $scope.get = function(){
        alert($cookieStore.get($scope.cookieToGet));
        $scope.cookieToGet = '';
    }

    $scope.remove = function(){
        $cookieStore.remove($scope.cookieToRemove);
        $scope.cookieToRemove = '';
    }
}]);
