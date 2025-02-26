function solution(s){
    let pCount = s.toLowerCase().split("p").length - 1;
    let yCount = s.toLowerCase().split("y").length - 1;
    return pCount === yCount;
}