var app = angular.module('learnPhoto');

app.service('bpimagesService', function($http, $q) {

    this.myEuropeImages = function (photoId, description) {


        var deferred = $q.defer();

        $http({
            method: 'GET',
            url:  'https://api.flickr.com/services/rest',
            params: {
                method: 'flickr.photosets.getPhotos',
                api_key: ,
                photoset_id: photoId,
                extras: 'description',
                user_id: '130019886@N08',
                format: 'json',
                nojsoncallback: 1
            }


        }).then(function (data) {
            console.log(data);
            var photoset = data.data.photoset.photo.slice(0, 20);
            for(var i = 0; i < photoset.length; i++){
                var image = photoset[i];
                photoset[i].url = "https://farm" + image.farm + ".staticflickr.com/" + image.server + "/" + image.id + "_" + image.secret + "_b.jpg";

            }


            deferred.resolve(photoset);
        })

        return deferred.promise;
    }
  this.myEuropeImages();
})
