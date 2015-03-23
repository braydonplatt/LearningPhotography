var app = angular.module('learnPhoto');

app.controller('imagesCtrl', function($scope, photoService, Lightbox){

    $scope.getInfo = function() {
        $scope.date = $scope.searchImages;
        photoService.getInfo($scope.date).then(function(data) {
            console.log(data);
            $scope.pictures = data;
            $scope.test = data;
        });
    };

    $scope.getInfo();
    $scope.openLightboxModal = function (index) {
        Lightbox.openModal($scope.getInfo, index);
    };

});