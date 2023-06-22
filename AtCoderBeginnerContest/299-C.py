N = int(input())
S = input()

Level = []
count = 0

if 'o' in S and '-' in S:
    for i in range(N):
        if S[i] == 'o':
            count += 1
        else:
            count = 0
        Level.append(count)
    print(max(Level))
else:
    print(-1)
