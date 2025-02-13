function solution(a, b) {
    let ab = parseInt(a.toString() + b.toString());
    let ba = parseInt(b.toString() + a.toString());
    return Math.max(ab,ba);
}