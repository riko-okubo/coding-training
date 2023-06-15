N, T = map(int, input().split())
C = list(map(int, input().split()))
R = list(map(int, input().split()))

Tlist = [[]]

for i in range(1,N+1):
    if C[i] == T:
        Tlist.append([i, R[i]])
    else:
        print(R.index(max(R)))
        exit()

