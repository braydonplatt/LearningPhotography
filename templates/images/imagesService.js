var app = angular.module('learnPhoto');

var id = "";
var param = "";

app.service('photoService', function($http, $q) {
    this.getInfo = function (date) {
        date = moment().format('YYYY-MM-DD');
        debugger;
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url:
        })
            .then(function (data) {
                console.log(data);
                var imageShow = data.data;
                //console.log(imageShow);
                for (var i = 0; i < imageShow.length; i++) {
                    //console.log(imageShow[i].dateupload);
                }
                return deferred.resolve(imageShow);
            });
        return deferred.promise;
    }
    this.getInfo();
})

    /* 1) var url = Form the URL request string.
    2) var formattedString = encodeURIComponent(url)
    3) add GET& <-- to the front fo the string var formattedUrl = GET& + formattedString
    4) use CryptoJS to create a HMAC-SHA1 hash. var signiature = Cryptojs.sha1(formattedUrl)
    5) append that signature onto the end of your url. */



