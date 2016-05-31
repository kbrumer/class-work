const express = require( 'express' );
const app = express();

const auth = require( '../routes/auth' );
const pets = require( '../routes/pets' );
const users = require( '../routes/users' );

const ensureAuth = require( './ensureAuth' );
const ensureRole = require( './ensureRole' );

const path = require( 'path' );
const public = path.join( __dirname, '../public' );

app.use( express.static( public ) );

app.use( '/', auth );
app.use( '/pets', ensureAuth, pets );
app.use( '/users', ensureAuth, ensureRole( 'admin' ), users );

module.exports = app;