// app.js

//import MovieModule from './movies/index.js';
//import ServicesModule from './services/index.js';
//import DirectivesModule from './directives/index.js';

// our root module
angular
  .module('app', ['ngRoute'])
  // .config([
  //   '$routeProvider',
  //   function config($routeProvider) {
  //     $routeProvider
  //       .when('/simple', {
  //         template: '<simple-example></simple-example>'
  //       })
  //       .otherwise('/simple');
  //   }
  // ])
  //.module('app', [DirectivesModule, ServicesModule, MovieModule])
  .run(() => console.log('Angular version ' + angular.version.full));
// .filter('checkmark', function() {
//   return function(input) {
//     return input ? '\u2713' : '\u2718';
//   };
// });
