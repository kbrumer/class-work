// echo upper

process.stdin.on( 'data', chunk => {
    process.stdout.write( chunk.toString().toUpperCase() );
});
