const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
    const n = parseInt(line);
    if(n % 2 === 0) {
        console.log(`${n} is even`);
    } else {
        console.log(`${n} is odd`);
    }
    rl.close();
});