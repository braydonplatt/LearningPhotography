var app = angular.module('learnPhoto');

var id = "";
var param = "";

app.service('photoService'(function($http, $q) {
    this.getInfo = function (user) {

        return $http({
            method: 'GET',
            url: ""
        });
    };

})