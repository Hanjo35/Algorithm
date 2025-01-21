// let input = require('fs').readFileSync('example.txt').toString().split(' ');
// 백준 제출 시 'example.txt' => '/dev/stdin' 으로 수정하세요.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function(line)
{
    let [str, n] = line.split(' ');
    n = Number(n);

    console.log(str.repeat(n));

    rl.close();
});