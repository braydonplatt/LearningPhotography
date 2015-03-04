var app = angular.module('learnPhoto');

    app.controller('mainController', function($scope, photoService){

        $scope.getInfo = function(){
            photoService.getInfo().then(function(res){
                console.log(res);
            })
        }

    })