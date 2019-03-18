
/**
 * 给定两个字符串 s 和 t， 判断 t 是否是 s 的一个字母异位词。

 示例 1:
     输入: s = "anagram", t = "nagaram"
     输出: true

示例 2:
     输入: s = "rat", t = "car"
     输出: false
 */


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    let l = s.length
    if (l !== t.length) return false
    let s1 = new Array(26).fill(0),
        s2 = new Array(26).fill(0);
    for (let i = 0; i < l; i++) {
        s1[s.charCodeAt(i) - 97]++
        s2[t.charCodeAt(i) - 97]++
    }
    for (let i = 0; i < 26; i++) {
        if (s1[i] !== s2[i]) return false
    }
    return true


    // s=s.split('').sort()
    // t=t.split('').sort()
    // for(let i=0;i<l;i++){
    //     if(s[i]!==t[i])return false
    // }
    // return true
};