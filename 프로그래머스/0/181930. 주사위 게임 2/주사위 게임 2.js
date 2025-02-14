function solution(a, b, c) {
    
    const sum = a + b + c;
    const squares = a**2 + b**2 + c**2;
    const cubes = a**3 + b **3 + c **3;
    
    if(a === b && b === c) {
        return sum * squares * cubes;
    } else if (a === b || b === c || a === c) { 
        return sum * squares;
    } else {
        return sum;
    }
    
}