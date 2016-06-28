import angular from 'angular';
import app from './todo-app';
import routes from './routes';
import './scss/main.scss';

app.config( routes );

app.value( 'apiUrl', 'http://localhost:3000/api' );

angular.bootstrap( document, [ app.name ] );

