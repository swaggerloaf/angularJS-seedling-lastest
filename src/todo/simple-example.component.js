(function() {
  'use strict';

  angular.module('app').component('simpleExample', simpleExample());

  function simpleExample() {
    function componentController() {
      var vm = this;
      vm.name = {
        first: '',
        last: ''
      };
    }

    return {
      templateUrl: '/src/todo/simple-example.component.html',
      bindings: {},
      controller: componentController
    };
  }
})();
