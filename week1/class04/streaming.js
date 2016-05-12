const fs = require( 'fs' );

const read = fs.createReadStream( 'big-file.pdf' );
const write = fs.createWriteStream( 'big-file-copy.pdf' );

read.on( 'data', data => {
	write.write(data);
});

read.on( 'end', () => {
	write.close();
});

// shorthand: read.pipe( write );

