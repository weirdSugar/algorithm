/**
写一个程序，输出从 1 到 n 数字的字符串表示。
1. 如果 n 是3的倍数，输出“Fizz”；
2. 如果 n 是5的倍数，输出“Buzz”；
3.如果 n 同时是3和5的倍数，输出 “FizzBuzz”。



示例：n = 15

返回:
[
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
]
 */


/**
* @param {number} n
* @return {string[]}
*/
var fizzBuzz = function (n) {
    let i = 0
    let lenT = Math.floor(n / 3)
    let lenF = Math.floor(n / 5)
    let re = []
    for (; i < n; i++) {
        let k = i + 1
        if (k % 3 == 0 || k % 5 === 0) {
            re.push('')
        }
        else {

            re.push("" + k)
        }
    }
    let dex = 1
    for (i = 0; i < lenT; i++) {
        re[dex * 3 - 1] += 'Fizz'
        dex++
    }
    dex = 1
    for (i = 0; i < lenF; i++) {
        re[dex * 5 - 1] += 'Buzz'
        dex++
    }
    return re
};