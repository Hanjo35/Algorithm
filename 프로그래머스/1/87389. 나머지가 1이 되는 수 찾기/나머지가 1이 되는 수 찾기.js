function solution(n) {
    var answer = 0;
    
    for(x = 0; x < n; x++) {
        if (n % x === 1 ) {
            return x;
        }
    }
}