import angular from 'angular';
import app from './todo-app';
import routes from './routes';
import http from './http';
import auth from './auth';
import oauth from './oauth';
import './scss/main.scss';

app.constant( 'apiUrl', process.env.API_URL );

app.config( http );
app.config( routes );
app.config( oauth );

app.run( auth );

angular.bootstrap( document, [ app.name ] );

