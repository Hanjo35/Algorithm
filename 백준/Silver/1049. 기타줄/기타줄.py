import sys
input = sys.stdin.readline

n, m = map(int, input().split()) # n은 끊어진 줄의 갯수, m은 브랜드 갯수
pack = [] 
one = [] 


for _ in range(m): # 변수 없이 반복문 실행 가능
    a, b = map(int, input().split())
    pack.append(a) # 리스트에 패키지 가격을 추가
    one.append(b) # 낱개 가격 추가

min_pack = min(pack) 
answer = 0


while n > 0:
    if n >= 6: 
        min_one = min(one)*6  
        n -= 6
    else: 
        min_one = min(one)*n 
        n -= n
        
    if min_one < min_pack: # 가격을 비교, 더 싼 가격을 더함 
        answer += min_one 
    else:
        answer += min_pack


print(answer)
