var app = angular.module("learnPhoto", ['firebase', 'ngRoute', 'bootstrapLightbox']);

app.config(function($routeProvider, LightboxProvider){
    LightboxProvider.templateUrl = 'templates/LightBox/lightbox.html';
    $routeProvider
        .when("/", {
            templateUrl: "/templates/home/homeTemp.html",
            controller: "homeCtrl"
        })
        .when("/images", {
            templateUrl: "/templates/images/imagesTemp.html",
            controller: "imagesCtrl"
        })

        .when("/info", {
            templateUrl: "/templates/Info/infoTemp.html",
            controller: "infoCtrl"
        })

        .when("/myimages", {
                    templateUrl: "/templates/bpImages/bpImagesTemp.html",
                    controller: "bpimagesCtrl",
                    resolve: {
                        user: function(photoService) {
                            return photoService.getInfo();
                        }
                    }
                })
        .otherwise({
            redirectTo: "/"
            })


});
