angular.module("f3-routing")
    .config(function($routeProvider, $locationProvider){
        $locationProvider.html5Mode(true);
        
        $routeProvider
            .when("/", {
                templateUrl: "views/view.html",
                controller: "MainController"
            })
            .otherwise({
                redirectTo: "/"
            });
    });