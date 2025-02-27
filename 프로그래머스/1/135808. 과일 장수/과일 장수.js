function solution(k, m, score) {
    
    score.sort((a,b) => b - a);
    
    let total = 0;
    
    for (let i = m - 1; i < score.length; i += m) {
        total += score[i] * m;
    }
    
    return total; 
}