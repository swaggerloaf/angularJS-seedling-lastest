const MainController = function($scope) {
  $scope.count = 0;
  $scope.singleModel = 1;


  $scope.increment = function increment() {
    $scope.count++;
  };
  $scope.decrement = function decrement() {
    $scope.count--;
  };


};

MainController.$inject = ['$scope'];

export default MainController;
