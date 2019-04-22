/**
 * 判断给定数是不是三的幂次方
 */

/**
* @param {number} n
* @return {boolean}
*/
var isPowerOfThree = function (n) {
    return /^10*$/.test(n.toString(3))
};


/**
 * 以3为底求n的对数是不是整数
 * 可是js的计算精度问题这个方法不可行
 */
var isPowerOfThree = function (n) {
    const a = (Math.log10(n) / Math.log10(3))%1
    return !a
};