describe('Todo Application', function() {
  describe('todoList', function() {
    beforeEach(function() {
      browser.get('index.html');
    });

    it('should filter the todo list as a user types into the search box', function() {
      var todoList = element.all(by.repeater('todo in $ctrl.todos'));
      var query = element(by.model('$ctrl.query'));

      expect(todoList.count()).toBe(4);

      query.sendKeys('Call');
      expect(todoList.count()).toBe(2);

      query.clear();
      query.sendKeys('Wow');
      expect(todoList.count()).toBe(1);
    });
  });
});
