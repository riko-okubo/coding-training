H, W = map(int, input().split())
A = [list(input().split()) for i in range(H)]
B = [list(input().split()) for j in range(H)]

print(A)
print(B)

s = 0
t = 0

for i in range(H):
    for j in range(W):
        for k in range(H):
            for l in range(W):
