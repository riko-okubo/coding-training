S = input()
T = input()

at = ['a', 't', 'c', 'o', 'd', 'e', 'r']
Answer = 'Yes'

# SとTの文字列で、一致している文字は文字列SとTから削除する
for i in range(len(S)):
    if S[i] == T[i]:
        restS = S.replace(S[i], '')
        restT = T.replace(T[i], '')
    else:
        continue

print(restS, restT)


print(Answer)
