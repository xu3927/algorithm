// backtracking 回溯法 / 试探算法

// 生成所有的彩票号码组合, 7个数字, 数字为1-29, 不能有重复

/**
 *  分析
 * 
 */
/**
 * 生成 N 位的彩票号码, 取值为 1 - max, 不能有重复数字
 * @param {Number} n 位数
 * @param {Number} max 最大值, 取值范围为[1, max]
 * @return {Array} 结果
 */
function generateLotteryNumber(n, max) {
    function iterator(m) {
        let res = []
        for (var j = 1; j <= max; j++) {
            let _arr = [[]]
            // 第1位的时候
            if (m == 1) {
                _arr = [[]]
            } else {
                _arr = iterator(m - 1)
            }
            let list = []
            _arr.forEach(item => {
                if (!item.includes(j)) {
                    list.push([j, ...item])
                }
            })
            res = [...res, ...list]
        }
        return res
    }
    return iterator(n + 1)
}

console.log(generateLotteryNumber(3, 5))