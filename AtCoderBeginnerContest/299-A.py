N = int(input())
S = input()

start = S.find('|')

for i in range(start+1, N):
    if S[i] == '*':
        print('in')
        exit()
    elif S[i] == '|':
        print('out')
        exit()

