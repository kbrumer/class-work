const fs = require( 'fs' );
const path = require( 'path' );
const assert = require( 'assert' );


describe.skip( 'some async tests', () => {
  
  it( 'has foo in foo.txt', done => {
    const filename = path.join( __dirname, 'foo.txt' );
    fs.readFile( filename, ( err, file ) => {
      if ( err ) return done( err );			
      assert.equal( file, 'bar' );
      done();
    });
  });
  
  it( 'reads foo in foo.txt', done => {
    const filename = path.join( __dirname, 'foo.txt' );
    fs.readFile( filename, done );
  });
});

describe( 'read files in directory', () => {
  
  it( 'returns array of conents', done => {
    const dir = path.join( __dirname, 'my-files' );
    
    getAllFiles( dir, (err, result) => {
      if( err ) return done( err );
      assert.ok( result.indexOf('foo') !== -1, 'no foo' );
      assert.ok( result.indexOf('bar') !== -1, 'no bar' );
      assert.ok( result.indexOf('qux') !== -1, 'no qux' );
      done();
    });
  });
});

function getAllFiles( directory, cb ) {
  
  fs.readdir( directory, ( err, files ) => {
    if ( err ) return cb( err );			
  
    const results = [];
    var count = files.length;
    
    files.forEach( ( file, i ) => {
      
      const filepath = path.join( directory, file);

      fs.readFile( filepath, 'utf-8', ( err, filetext ) => {
        if ( err ) return cb( err );
        results[i] = filetext;
        
        if ( !--count ) {
          cb( null, results );
        }
      });
      
    });			
  });
}

function getAllFilesFlatten( directory, cb ) {
  
  fs.readdir( directory, ( err, files ) => {
    if ( err ) return cb( err );			
  
    files.forEach( file => {
      const filepath = path.join( directory, file);
      readFile( filepath );
    });
          
    const results = [];
    var count = files.length;
    
    function readFile( filepath ) {
      fs.readFile( filepath, 'utf-8', ( err, filetext ) => {
        if ( err ) return cb( err );
        results.push( filetext );
        
        if ( !--count ) {
          cb( null, results );
        }
      });
    }
    
  });
}

const sander = {};
function getAllFilesPromise( directory ) {
  return sander.readdir( directory ).then( files => {		
    return Promise.all( files.map( file => {
      const filepath = path.join( directory, file);
      return sander.readFile( filepath, 'utf-8' );
    }));			
  });
}