/**
统计所有小于非负整数 n 的质数的数量。

 示例:
 输入: 10
 输出: 4
 解释: 小于 10 的质数一共有 4 个, 
       它们是 2,3,5,7。
 */

/**
* @param {number} n
* @return {number}
*/
var countPrimes = function (n) {
    if (n <= 2) return 0
    let arr = [0, 0, 2], sum = 0
    for (let i = 3; i < n; i++) {
        if (i % 2 === 0) arr.push(0)
        else arr.push(i)
    }
    for (i = 2; i < n; i++) {
        if (arr[i] !== 0) {
            sum++
            let j = 2
            while (i * j < n) {
                arr[i * j] = 0
                j++
            }
        }
    }
    return sum
};