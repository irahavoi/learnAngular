/**
 * Created by irahavoi on 6/8/2015.
 */
var aMailServices = angular.module('AMail', ['ngRoute']);

function emailRouteConfig($routeProvider){
    //Set up mappings between URLs, templates and controllers
    $routeProvider.
        when('/', {
            controller: ListController,
            templateUrl: 'list.html',
        }).
        //Notice parameterized url:
        when('/view/:id', {
            controller: DetailController,
            templateUrl: 'detail.html'
        }).
        otherwise({
            redirectTo : '/'
        });
}

//Set route config
aMailServices.config(emailRouteConfig);

var messages;

function ListController($scope, $http){
    $http.get('fakeData/messages.json').success(function(data, status, headers, config){
        messages = data;
        $scope.messages = messages;
    });
}

function DetailController($scope, $routeParams){
    $scope.message = messages[$routeParams.id];
}

