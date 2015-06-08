/**
 * Created by irahavoi on 6/8/2015.
 */
var myModule = angular.module('myApp', []);


myModule.directive('hello', function(){
    return {
        restrict : 'E',
        templateUrl : 'helloTemplate.html',
        replace : true
    }
});

myModule.directive('bye', function(){
    return {
        restrict: 'E',
        template : '<div class="alert alert-danger"><strong>Good-Bye!</strong></div>',
        replace: true
    }
})