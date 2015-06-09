/**
 * Created by irahavoi on 6/8/2015.
 */
var myModule = angular.module('myApp', []);

//If you want the dynamically-loaded template to be available before the directive run, call it via a run function:
myModule.run(function($templateCache, $http){
   var template =  $http.get('helloCachedTemplate.html');
   $templateCache.put('helloCachedTemplate.html', template);
});


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
        template : '<div class="alert alert-danger"><strong>Good-Bye! (template is just a string defined as the value of directive\'s "template" property.)</strong></div>',
        replace: true
    }
});

myModule.directive('seeYa', function(){
    return {
        restrict: 'E',
        templateUrl : 'seeYouTemplateInline.html',
        replace: true
    }
});

myModule.directive('cachedHello', function(){
    return {
        restrict: 'E',
        templateUrl : 'helloCachedTemplate.html',
        replace: true
    }
});

myModule.directive('helloTransclude', function(){
    return{
        template : '<div>Hi <strong ng-transclude></strong>. I use transclusion.</div>',
        transclude : true
    }
});