/**
 * Created by irahavoi on 6/5/2015.
 */
var myAppModule = angular.module('myApp', []);

myAppModule.controller('AddUserController', function($scope){
    $scope.addUser = function(){
        var user = $scope.user;

        console.log('User ' + user.firstName + ' has been added!');
    }

});/**
 * Created by irahavoi on 6/8/2015.
 */
