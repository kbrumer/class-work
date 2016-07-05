import angular from 'angular';
import app from './todo-app';
import routes from './routes';
import http from './http';
import auth from './auth';
import './scss/main.scss';

app.config( http );
app.config( routes );
app.value( 'apiUrl', process.env.API_URL );

app.run( auth );

angular.bootstrap( document, [ app.name ] );

