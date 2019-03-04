describe('A suite for todo factory', function() {
  var todos = null;

  var app = beforeEach(angular.mock.module('app'));

  //beforeEach(inject(function(_Todos_) {
  //  todos = _Todos_;
  //}));

  it('should exist', function() {
    expect(todos).toBeDefined();
  });
});
