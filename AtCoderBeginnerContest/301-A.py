N = int(input())
S = list(input())

win = N/2
Twin = 0
Awin = 0

for i in range(N):
    if S[i] == 'T':
        Twin += 1
        if Twin >= win:
            print('T')
            exit()
    elif S[i] == 'A':
        Awin += 1
        if Awin >= win:
            print('A')
            exit()
