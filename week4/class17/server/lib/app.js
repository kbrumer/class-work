const express = require( 'express' );
const app = express();

const pets = require( '../routes/pets' );

app.use( '/pets', pets );

module.exports = app;