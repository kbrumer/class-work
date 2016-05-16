const fs = require('fs');

// const stream = fs.createWriteStream('write-contents.txt');

// process.stdin.pipe( stream );

// pipe stdin to file

const read = fs.createReadStream( 'write-contents.txt' );

read.pipe( process.stdout );