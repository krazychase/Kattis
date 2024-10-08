const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    var jonsAh = line;
    rl.on('line', (line) => {
        var docsAh = line;
        var result = jonsAh.length >= docsAh.length ? 'go' : 'no';
        console.log(result)
    });
});