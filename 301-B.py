N = int(input())
A = list(map(int, input().split()))

L = []

for i in range(N-1):
    if(A[i] > A[i+1]):
        for j in range(A[i], A[i+1], -1):
            L.append(j)
    elif(A[i] < A[i+1]):
        for j in range(A[i], A[i+1]):
            L.append(j)
    
L.append(A[N-1])

for i in range(len(L)):
    print(L[i], end=' ')