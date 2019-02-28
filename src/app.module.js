// app.js
import angular from 'angular';

import MovieModule from './movies/index.js';
import ServicesModule from './services/index.js';
import DirectivesModule from './directives/index.js';

// our root module
const AppModule = angular
  .module('app', [DirectivesModule, ServicesModule, MovieModule])
  .run(() => console.log('Angular version ' + angular.version.full))
  .filter('checkmark', function() {
    return function(input) {
      return input ? '\u2713' : '\u2718';
    };
  }).name;

export default AppModule;
