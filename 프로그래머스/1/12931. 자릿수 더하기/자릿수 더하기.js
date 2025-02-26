function solution(n)
{
    return n.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
}