N, M = map(int, input().split())

A = list()
for i in range(M):
    a = list(map(int, input().split()))
    A.append(a)

adj = [[0] * N for i in range(N)]
for i in range(M):
    for j in range(N-1):
        l, r = A[i][j]-1, A[i][j+1]-1
        adj[l][r] = 1
        adj[r][l] = 1

count = 0   
for i in range(N):
    for j in range(i+1, N):
        if adj[i][j] == 0:
            count += 1

print(count)
