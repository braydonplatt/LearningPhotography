var app = angular.module("learnPhoto", ['firebase', "ngRoute"]);

app.config(function($routeProvider){
    $routeProvider
        .when("/login", {
            templateUrl: "/js/templates/login/loginTemp.html",
            controller: "loginCtrl"
        })
        .when("/threads", {
            templateUrl: "/js/templates/threads/threads.html",
            controller: "threadsCtrl",
            resolve: {
                threadsRef: function(threadsService) {
                    return threadsService.getThreads();
                }
            }
        })
        .otherwise({
            redirectTo: "/login"
        })
})
