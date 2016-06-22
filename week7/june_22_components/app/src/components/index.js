import angular from 'angular';
import app from './app/app';
import todoList from './todo-list/todo-list';
import todoItem from './todo-item/todo-item';
import addNewTodo from './add-new-todo/add-new-todo';

const components = angular.module( 'components', [] )
	.component( 'app', app )
	.component( 'todoList', todoList )
	.component( 'addNewTodo', addNewTodo )
	.component( 'todoItem', todoItem );

export default components.name;