/**
 * 给定一个字符串， 验证它是否是回文串， 
 * 只考虑字母和数字字符， 可以忽略字母的大小写。

 说明： 本题中， 我们将空字符串定义为有效的回文串。

 示例 1:
     输入: "A man, a plan, a canal: Panama"
 输出: true

 示例 2:
     输入: "race a car"
 输出: false
 */

 /**
  * @param {string} s
  * @return {boolean}
  */
 var isPalindrome = function (s) {
     const l = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
     const k = l.length
     for (let i = 0; i < k / 2; i++) {
         if (l[i] !== l[k - i - 1])
             return false
     }
     return true
 };