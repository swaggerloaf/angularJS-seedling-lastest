/* eslint-disable no-unused-vars */
function TodoController($scope) {
  this.list = [
    { id: Date.now(), text: 'Call Fred', completed: false },
    { id: Date.now(), text: 'Call Brian', completed: false },
    { id: Date.now(), text: 'Call Tom', completed: false }
  ];
}

TodoController.$inject = ['$scope'];

// eslint-disable-next-line no-undef
angular.module('app').controller('TodoController', TodoController);
