/**
 * 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
最高位数字存放在数组的首位， 数组中每个元素只存储一个数字。
你可以假设除了整数 0 之外，这个整数不会以零开头。

示例 1:
输入: [1,2,3]
输出: [1,2,4]
解释: 输入数组表示数字 123。
 */


/**
* @param {number[]} digits
* @return {number[]}
*/
var plusOne = function (digits) {
    for (let i = digits.length - 1; i > -1; i--) {
        digits[i] += 1
        if (digits[i] == 10) {
            digits[i] = 0
            continue
        } else {
            break;
        }
    }
    if (digits[0] == 0) {
        digits.unshift(1)
    }
    return digits
    // return (parseInt(digits.join().replace(/,/g,''))+1).toString().split('')
};