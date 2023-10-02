n, k = map(int, input().split())
a = list(map(int, input().split()))

count = 0
for x in range(n):
    for y in range(x+1, n):
        for z in range(y+1, n):
            if (a[x] + a[y] + a[z] == k):
                count += 1
print(count)
