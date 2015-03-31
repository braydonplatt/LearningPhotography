var app = angular.module('learnPhoto');

    app.controller('bpimagesCtrl', function($scope, bpimagesService, Lightbox) {

        $scope.myEuropeImages = function () {

            Lightbox.getImageCaption = function (image) {
                return image.description._content;
            };


            bpimagesService.myEuropeImages('72157651462757081').then(function(data, LightboxProvider) {
                $scope.images = data;

                console.log($scope.images);

            })
        }

        $scope.openLightboxModal = function (index) {
            Lightbox.openModal($scope.images, index);
        };
        $scope.myEuropeImages2 = function () {





            bpimagesService.myEuropeImages('72157651279587531').then(function(data) {
                $scope.images = data;
                 console.log($scope.images);
    })
}
            $scope.myEuropeImages();
        $scope.openLightboxModal = function (index) {
            Lightbox.openModal($scope.images, index);
            }
});
