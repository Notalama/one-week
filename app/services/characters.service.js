(function() {
    'use strict';

    angular.module('app').factory('charService', charService);
    // charService.$inject = ['$http', '$q', '$log'];
    function charService($q, $http) {
        var list = [];
        $http.get('characters-json/characters.json').then(function(response) {
            for(var i = 0; i < response.data.length; i++) {
                list.push(response.data[i]);
            }
        });
        return {
            getAllCharacters: function () {
                return $q.when(list);
            }
        };

        // function getAllCharacters() {

            // var deferred = $q.defer();
            // $http.get('characters-json/characters.json').then(function(response) {
            //     deferred.resolve(response.data);
            // }, function (response) {
            //     deferred.reject(response.data);
            // }).catch(function (response) {
            //     deferred.reject(response.data);
            // });

        //     return $q.when(list);
        // }




    }
})();