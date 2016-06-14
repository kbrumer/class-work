import angular from 'angular';
import controllers from './controllers';
import template from './app.html';
import './css/main.css';

const app = angular.module( 'app', [ controllers ] );

document.body.innerHTML = template;
angular.bootstrap( document, [ app.name ] );
