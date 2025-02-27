const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(" ");

const n = parseInt(input[0]); // 첫 번째 값: n
const k = parseInt(input[1]); // 두 번째 값: k

let arr = [];

for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
        arr.push(i);
    }
}

console.log(arr[k - 1] || 0);