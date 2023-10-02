N = int(input())
S = input()
T = input()

def comparison(s, t):
        return(
            s == t
            or (s == '1' and t == 'l')
            or (s == 'l' and t == '1')
            or (s == '0' and t == 'o')
            or (s == 'o' and t == '0')
        ) 

for i in range(N):
    if(not comparison(S[i], T[i])):
        print('No')
        exit()
print('Yes')