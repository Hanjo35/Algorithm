const fs = require('fs');

// 표준 입력 처리 (백준 환경)
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const T = parseInt(input[0]); // 첫 번째 줄: 테스트 케이스 개수

for (let t = 1; t <= T; t++) {
    let n = parseInt(input[t]); // 두 번째 줄부터 n 입력 받음

    let binary = n.toString(2); // 2진수 변환
    let positions = [];

    // 1의 위치 찾기 (오른쪽에서 왼쪽으로)
    for (let i = 0; i < binary.length; i++) {
        if (binary[binary.length - 1 - i] === '1') {
            positions.push(i);
        }
    }

    console.log(positions.join(" "));
}