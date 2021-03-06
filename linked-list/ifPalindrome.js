/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    var a = []
    var point = head
    while (point !== null) {
        a.push(point.val)
        point = point.next
    }
    const len = a.length
    for (let i = 0; i < len / 2; i++) {
        if (a[i] !== a[len - i - 1]) return false
    }
    return true
};



/**
 * 另一种
 * 找到中间点 slow走一个 fast走两下
 * 翻转后半部分
 * 然后head 和 mid 开始比较
 */