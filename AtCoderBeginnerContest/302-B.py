h, w = map(int, input().split())
s = [list(input()) for l in range(w)]

dx[8] = [1, -1, 0, 0, 1, 1, -1, -1]
dy[8] = [0, 0, 1, -1, 1, -1, 1, -1]

for i in range(h):
    for j in range(w):
        for k in range(8):

            
# https://zenn.dev/lia/articles/c5e00435659ea2