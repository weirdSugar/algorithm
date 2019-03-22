/**
 * 
 * 
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀，返回空字符串 ""。

    示例 1:
    输入: ["flower","flow","flight"]
    输出: "fl"

    示例 2:
    输入: ["dog","racecar","car"]
    输出: ""

 */


/**
* @param {string[]} strs
* @return {string}
*/
var longestCommonPrefix = function (strs) {
    const len = strs.length
    if (!len) return '';
    strs.sort()
    const a = strs[0]
    const b = strs[len - 1]
    let rStr = ''
    for (let i = 0; i < a.length; i++) {
        if (a[i] === b[i]) {
            rStr += a[i]
        } else {
            break;
        }
    }
    return rStr
};