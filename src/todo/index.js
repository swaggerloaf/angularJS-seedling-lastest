import angular from 'angular';
import todoList from './todo-list.component.js';
import TodoController from "./todo.controller";

// our common module
const TodoModule = angular
  .module('app-todo', [])
  .controller("TodoController", TodoController)
  .component('todoList', todoList()).name;

export default TodoModule;
