const todoList = function() {
  return {
    templateUrl: '/src/todo/todo-list.component.html',
    controller: function() {
      this.todos = [
        { id: 1, text: 'Call Fred', completed: true },
        { id: 2, text: 'Call Brian', completed: false },
        { id: 3, text: 'Call Tom', completed: false }
      ];
    }
  };
};

export default todoList;
