import sys

input = sys.stdin.readline # 대량의 데이터를 입력

N = int(input()) # 배열의 크기 N 입력

A = list(map(int, input().split())) # 배열 A 입력

M = int(input()) # A 안에서 찾을 M 의 크기

Search = list(map(int, input().split())) # 찾아낼 숫자들

A.sort() # 정렬

def binary(A, target):

    start = 0
    end = N-1
    
    while start <= end:
        
        mid = (start + end) // 2

        if A[mid] == target:
            return mid
    
        elif A[mid] < target:
            start=mid+1
        else:
            end=mid-1

    return None
    
for i in Search :
    if binary(A, i) != None:
        print(1)
    else:
        print(0)
    