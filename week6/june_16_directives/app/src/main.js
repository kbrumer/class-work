import angular from 'angular';
import app from './app';
import template from './app.html';
import './css/main.css';

document.body.innerHTML = template;
angular.bootstrap( document, [ app ] );
