(function() {
  'use strict';

  angular.module('app').service('notifyService', notifyService);

  /** @ngInject */
  function notifyService($window) {
    this.fn = fn;

    var msgs = [];
    return function fn(msg) {
      msgs.push(msg);
      if (msgs.length === 2) {
        $window.alert(msgs.join('\n'));
        msgs = [];
      }
    };
  }

  notifyService.$inject = ['$window'];
})();
