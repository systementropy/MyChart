// app.js
var routerApp = angular.module('routerApp', ['ui.router']);
routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'home.html'
        })
        .state('GoogleVisualization', {
            url: '/GoogleVisualization',
            templateUrl: 'untitled.html'
        })
        .state('HiChart', {
            url: '/HiChart',
            templateUrl: 'hichart.html'
        })
        .state('PartColor', {
            url: '/PartColor',
            templateUrl: 'collex.html'
        })
});