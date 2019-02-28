const stretch = function() {
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
};

export default stretch;
