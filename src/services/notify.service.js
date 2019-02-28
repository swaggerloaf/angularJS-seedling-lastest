const notifyService = function($window) {
  var msgs = [];
  return function(msg) {
    msgs.push(msg);
    if (msgs.length === 2) {
      $window.alert(msgs.join('\n'));
      msgs = [];
    }
  };
};

notifyService.$inject = ['$window'];

export default notifyService;
