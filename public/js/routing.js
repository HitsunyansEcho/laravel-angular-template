angular.module("f3-routing")
    .config(function($routeProvider, $locationProvider){
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
        
        $routeProvider
            .when("/", {
                templateUrl: "views/view.html",
                controller: "MainController"
            })
            .otherwise({
                redirectTo: "/"
            });
    });