(function() {
  'use strict';

  angular.module('app').directive('stretch', stretch);

  /** @ngInject */
  function stretch() {
    function directiveController() {
      var vm = this;

      init();

      function init() {}
    }

    function link() {}

    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        element.on('focus', function(event) {
          event.target.value = 'fred';
        });
        element.on('blur', function(event) {
          event.target.value = 'brian';
        });
      }
    };
  }
})();
