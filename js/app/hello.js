/**
 * Created by irahavoi on 6/5/2015.
 */
var myAppModule = angular.module('myApp', []);
myAppModule.controller('HelloWorldController', function($scope){
    $scope.updateChangeCounter = function(){
        $scope.changesCount++;

        if($scope.changesCount > 10){
            $scope.dereg();
            $scope.result = "Too many changes! X_X";
        }
    }


    $scope.reset = function(){
        $scope.dereg = $scope.$watch('result', $scope.updateChangeCounter);
        $scope.result = 'Hello, Angular!';
        $scope.changesCount = 0;
    }

    $scope.reset();

    $scope.students = [
        {
            name : 'James Bond',
            id : '1'
        },
        {
            name : 'Gandalf White',
            id : '2'
        },
        {
            name : 'Marry Poppins',
            id : '3'
        }
    ];

    $scope.addNewStudent = function(){
        $scope.students.push({name: 'NewStudent', id : 'x'});
    }

    $scope.removeLastStudent = function(){
        $scope.students.pop();
    }
});