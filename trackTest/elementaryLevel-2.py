parts = input().split()
pairs = parts[:-1]  # [:-1]で最後の要素を除外
m = int(parts[-1])  # [-1]で最後の要素を取得

N = []
C = []
for pair in pairs:
    num, char = pair.split(':')
    N.append(int(num))
    C.append(char)

c = ""
for i in range(len(N)):
    if m % N[i] == 0:
        c += C[i]
if c == "":
    print(m)

print(c)
