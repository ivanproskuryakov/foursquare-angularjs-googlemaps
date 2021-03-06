'use strict';

define(
  [
    'app',
  ],
  function () {
    angular
      .module('app')
      .service('fourSquare', [
        '$http',
        function ($http) {
          return {
            search: function (location) {
              var clientId = 'FKPUYLMSE3TDFM2FL4DSMXZB04S1SLVFK305XM03FZXTY5MF';
              var clientSecret = 'I2NWDNB4B1ALFADIONJ1EM33GHF1VOB4MFH4TGZC50FMV3QI';
              var apiDate = '20181010';
              var limit = 100;
              var categoryId = '4bf58dd8d48988d142941735'; // Asian Restaurant, see https://developer.foursquare.com/docs/resources/categories

              var url = 'https://api.foursquare.com/v2/venues/search' +
                '?near=' + location +
                '&categoryId=' + categoryId +
                '&limit=' + limit +
                '&client_id=' + clientId +
                '&client_secret=' + clientSecret +
                '&v=' + apiDate;

              return $http({
                method: 'GET',
                url: url,
              });
            },
          };
        },
      ]);
  },
);
