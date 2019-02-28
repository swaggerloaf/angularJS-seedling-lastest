import angular from 'angular';

import todoList from './todo-list.component.js';

// our common module
const TodoModule = angular
  .module('app-controllers', [])
  .component('todoList', todoList()).name;

export default TodoModule;
