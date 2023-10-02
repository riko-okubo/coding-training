n = int(input())
A = []
B = []
for i in range(n):
    a, b = input().split()
    A.append(int(a))
    B.append(int(b))

for i in range(n):
    if (B[i] <= 60 and A[i] + B[i] <= 100):
        print("fail")
    elif (B[i] <= 60 or A[i] + B[i] <= 100):
        print("reexamination")
    else:
        print("pass")
