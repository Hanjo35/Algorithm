n, k = map(int, input().split())

a_list = []

for i in range(1, n+1):
    if n%i == 0:
        a_list.append(i)

if len(a_list) < k:
    print(0)
else:
    print(a_list[k-1])
