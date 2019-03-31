// 判断链表是不是有环

// 两个人不同速度跑  如果跑的是环则必会相遇

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    if (head === null || head.next === null) {
        return false
    }
    let slow = head, fast = head.next
    while (slow !== fast) {
        if (fast === null || fast.next === null) {
            return false
        }
        slow = slow.next
        fast = fast.next.next;
    }
    return true
}; 