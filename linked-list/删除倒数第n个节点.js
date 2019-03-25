/**
 * 删除链表的倒数第 n 个节点，
 * 并且返回链表的头结点。
 */


/**
 * 两个指针，让a先走n下
 * 然后两个一块走 
 * 直到a到达最后一个节点
 * b就是倒数n个节点
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let idx1 = null, idx2 = null
    for (let i = 0; i < n; i++) {
        if (idx1 == null) {
            idx1 = head
        }
        else {
            idx1 = idx1.next
        }
    }
    while (idx1.next) {
        if (idx2 == null) {
            idx2 = head;
            idx1 = idx1.next
        }
        else {
            idx1 = idx1.next
            idx2 = idx2.next
        }
    }

    // 如果b一步没走 就是共n个节点删除倒数第n个
    if (idx2 == null) {
        return head.next;
    }
    idx2.next = idx2.next.next;
    return head
};
