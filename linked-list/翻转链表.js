/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var head = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: null
                }
            }
        }
    }
}
var reverseList = function (head) {
    let point = head;
    let point2 = null
    while (point !== null) {
        point.before = point2
        point2 = point
        point = point.next
        point2.next = point2.before
        delete point2.before
    }
    return point2
};