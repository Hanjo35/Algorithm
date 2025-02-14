function solution(num_list) {
    const sum = num_list.reduce((acc, num) => acc * num, 1);
    const sumSquared = num_list.reduce((acc, num) => acc + num, 0) ** 2;
    
    return sum < sumSquared ? 1 : 0;
}

