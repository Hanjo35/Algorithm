const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    for(let i=0; i < line.length; i++) {
        console.log(line[i]);
    }
    rl.close();
});