N, A, B = map(int, input().split())
C = list(map(int, input().split()))

wa = A + B

for i in range(N+1):
    if C[i] == wa:
        print(i+1)
        exit()
