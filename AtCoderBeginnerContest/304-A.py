N = int(input())
S = []
A = []

for i in range(N):
    s, a = input().split()
    S.append(s)
    A.append(int(a))

minA = min(A)
minA_index = A.index(minA)

for i in range(minA_index, N):
    print(S[i])
for i in range(minA_index):
    print(S[i])
