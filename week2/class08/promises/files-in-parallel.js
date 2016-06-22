const sander = require( 'sander' );

function getAllFiles( directory ) {
  return fsPromise.readdir( directory )
    .then( files => files.map( f => path.join(directory, f ) ) )
    .then( paths => paths.map( p => fsPromise.readFile( p, { encoding: 'utf-8' } ) ) )
    .then( filePromises => Promise.all( filePromises ) )
}

