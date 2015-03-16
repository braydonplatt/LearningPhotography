var app = angular.module('learnPhoto');

    app.controller('bpimagesCtrl', function($scope, bpimagesService, Lightbox) {

        $scope.myEuropeImages = function () {


            bpimagesService.myEuropeImages($scope.myEuropeImages).then(function(data) {
                $scope.images = data;
                console.log($scope.images);
            })
        }
        $scope.myEuropeImages();
        $scope.openLightboxModal = function (index) {
            Lightbox.openModal($scope.images, index);
        };
    });