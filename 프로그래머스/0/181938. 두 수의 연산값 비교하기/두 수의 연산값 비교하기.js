function solution(a, b) {
    let ab = parseInt(a.toString() + b.toString());
    let product = 2 * a * b;
    
    return Math.max(ab, product);
}