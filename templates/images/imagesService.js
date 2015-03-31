var app = angular.module('learnPhoto');


app.service('photoService', function($http, $q) {
    this.getInfo = function (date) {

        //debugger;

        date = moment(date).subtract(1, 'day').format('YYYY-MM-DD');

        var deferred = $q.defer();

        $http({
            method: 'GET',
                url: 'https://api.flickr.com/services/rest',
                params: {
                    method: 'flickr.interestingness.getList',
                    api_key: ,
                    date: date,
                    format: 'json',
                    nojsoncallback: 1
            }
        }).then(function(data){
            console.log(data);
            //allPhotos.concat(data.data.photos);
            //deferred.return(allPhotos.slice(0,20))
            deferred.resolve(data.data.photos.photo.slice(0,23));
        })

    return deferred.promise;
    }
        this.getInfo();

   // this.getNextPage(page){
   //     return allPhotos.slice(page * 20 , page * 20);
   // }

})


