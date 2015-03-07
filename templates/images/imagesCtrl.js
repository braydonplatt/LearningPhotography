var app = angular.module('learnPhoto');

app.controller('imagesCtrl', function($scope, photoService){

    $scope.getInfo = function() {
        $scope.date = new Date();
        photoService.getInfo($scope.date).then(function(data) {
            console.log(data);
            $scope.pictures = data;
            $scope.test = data;
            $scope.date = date;
        });
    };
    console.log(photoService.getInfo());

});