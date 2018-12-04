/**
 * 上台阶
 * 一共有 n 个台阶, 每次可以上1个或2个, 问一共有多少种走法 
 * 类似题 青蛙过河 https://leetcode-cn.com/problems/frog-jump/
 *
 * 1个台阶时, 1种
 * 2个时, 2种
 * 3个时, 可以分解为从第1级跳2个, 或者从第2级跳1个两种情况, f(2) + f(1)
 * 4个, f(3) + f(2)
 * n个, n > 2 时 f(n) = f(n - 1) + f(n - 2) 
 */

// 递归
function goToStepsTimes(n) {
    if (n === 1) return 1
    if (n === 2) return 2
    return goToStepsTimes(n - 1) + goToStepsTimes(n - 2)
}

console.log(goToStepsTimes(8))

// 动态规划

function goToStepsTimesDP(n) {
    if (n === 1) return 1
    if (n === 2) return 2
    let times = [0, 1, 2]
    for (var i = 3; i <= n; i++) {
        times.push(times[i - 1] + times[i - 2])
    }
    return times[n]
}

console.log(goToStepsTimesDP(8))


/**
 * 输出所有可能的走法
 * 如 n = 2
 * [1, 1], [2]
 * 如 n = 3
 * [1, 1, 1], [1, 2], [2, 1], 
 * n = 4 
 * [1, 1, 1, 1], [1, 2, 1], [2, 1, 1]
 * [1, 1, 2], [2, 2]
 */

function goToStepsAllResultRecursion(n) {
    if (n === 1) return [[1]]
    if (n === 2) return [[1, 1], [2]]
    let arr1 = goToStepsAllResultRecursion(n - 1).map(item => [...item, 1])
    let arr2 = goToStepsAllResultRecursion(n - 2).map(item => [...item, 2])
    return [...arr1, ...arr2]
}

console.log(goToStepsAllResultRecursion(6))

// 动态规划
function goToStepsAllResultDP(n) {
    let store = {
        1: [[1]],
        2: [[1, 1], [2]]
    }
    if (n >= 3) {
        for (var i = 3; i <= n; i++) {
            let arr1 = store[i - 1].map(item => [...item, 1])
            let arr2 = store[i - 2].map(item => [...item, 2])
            store[i] = [...arr1, ...arr2]
        }
    }
    return store[n]
}

console.log(goToStepsAllResultDP(6))