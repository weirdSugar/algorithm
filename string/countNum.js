/**
 * 
 * 报数序列是一个整数序列，按照其中的整数的顺序进行报数，得到下一个数。其前五项如下：
    1.     1
    2.     11
    3.     21
    4.     1211
    5.     111221
    1 被读作  "one 1"  ("一个一") , 即 11。
    11 被读作 "two 1s" ("两个一"）, 即 21。
    21 被读作 "one 2",  "one 1" （"一个二" ,  "一个一") , 即 1211。

    给定一个正整数 n（1 ≤ n ≤ 30），输出报数序列的第 n 项。
 */



/**
* @param {number} n
* @return {string}
*/
var countAndSay = function (n) {
    let str = '1'
    while (n - 1) {
        let num = 0
        let old = str
        let tag = old[0];
        str = '';

        for (let i = 0; i < old.length; i++) {
            if (old[i] === tag) {
                num++
            } else {
                str += num + '' + tag
                tag = old[i]
                num = 1
            }
            if (i + 1 == old.length) {
                str += num + '' + tag
            }
        }
        n--
    }
    return str
};