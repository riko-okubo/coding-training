N, D = map(int, input().split())
#(x,y)の座標を記憶するリスト
X = []
Y = []

# N個の(x,y)の座標を記憶する
for i in range(N):
    x, y = map(int, input().split())
    X.append(x)
    Y.append(y)
    
# ユークリッド距離を求める関数
def euclid(x1, y1, x2, y2):
    return ((x1-x2)**2 + (y1-y2)**2)**0.5

# ユークリッド距離がD以下ならば'Yes'、そうでなければ'No'を返す関数
def judge(x1, y1, x2, y2, D):
    if(euclid(x1, y1, x2, y2) <= D):
        return True
    else:
        return False
    
# X[0],Y[0]とX[i],Y[i]のユークリッド距離がD以下のを記憶するリスト
L = []

# X[0],Y[0]とX[i],Y[i]のユークリッド距離がD以下ならばLに記憶し、'Yes'を出力する
# さらに、Lに記憶したX,Yとの距離がD以下ならば'Yes'を出力する
print("Yes")
for i in range(1,N-1):
    if(judge(X[0], Y[0], X[i], Y[i], D)):
        L.append(i)
        print("Yes1")
    for j in range(N - len(L)):
        if(judge(X[L[j]], Y[L[j]], X[i], Y[i], D)):
            print("Yes2")
        else:
            print("No")