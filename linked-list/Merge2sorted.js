/**
 * 有序的合并两个有序链表
 */

/**
* Definition for singly-linked list.
* function ListNode(val) {
*     this.val = val;
*     this.next = null;
* }
*/
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    var head = {}
    var point = head
    var point2 = l1
    var point3 = l2
    while (point2 !== null && point3 !== null) {

        if (point2.val < point3.val) {
            point.next = point2
            point2 = point2.next
        } else {
            point.next = point3
            point3 = point3.next
        }
        point = point.next
    }
    point.next = point2 ? point2 : point3

    return head.next
};