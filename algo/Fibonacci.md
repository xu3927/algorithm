# Fibonacci数列

斐波那契数列 1, 1, 2, 3, 5

计算第 N 位的值
f(n) = f(n-1) + f(n-2) (n >= 2)

### 递归法

```
function Fibonacci(n) {
    if (n == 1) return 1
    if (n == 2) return 1
    return (Fibonacci(n - 1) + Fibonacci(n - 2))
}
```

### for 循环

```
function Fibonacci(n) {
    var arr = ['', 1, 1] // 初始值
    for (var i = 3; i < n) {
        arr[i] = arr[i - 1] + arr[i - 2]
    }
    return arr[n]
}

```