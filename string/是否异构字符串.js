/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    let l = s.length
    if (l !== t.length) return false
    s = s.split('').sort()
    t = t.split('').sort()
    for (let i = 0; i < l; i++) {
        if (s[i] !== t[i]) return false
    }
    return true
};