print('your input: {a} {b}')
a, b = map(int, input().split())
 
n = a // b 
if(a%b == 0):
  print(n)
else:
  print(n+1)