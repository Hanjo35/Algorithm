const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function(line) {

    let result = line.split('').map(char => {
        return char === char.toUpperCase()
        ? char.toLowerCase()
        : char.toUpperCase();
    }).join(''); 

    console.log(result);
    rl.close();
});