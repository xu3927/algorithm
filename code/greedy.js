// 换零钱, 给一个指定金额, 输出零钱的组成

/**
 * 
 * @param {Number} amount 金额
 * @return {Array} 各个面额的张数
 */
function Greedy(amount) {
    // 面额, 分为单位
    let denominations = [10000, 5000, 1000, 500, 100, 50, 20, 10, 5, 2, 1]
    let moneys = [] // 每个面额的张数
    for (let i = 0; i < denominations.length; i++) {
        let _denomination = denominations[i]
        if (amount < _denomination) {

        } else {
            let n = parseInt(amount / _denomination)
            moneys.push(`${n}张${_denomination / 100}元`)
            amount = amount % _denomination
        }
    }
    return moneys
}

console.log(Greedy(17975))
