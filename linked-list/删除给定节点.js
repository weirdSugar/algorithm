/**
 * 
 * 参数只给一个要删除的节点
 * ListNode {
  val: 5,next: 
  ListNode { val: 1, next: 
    ListNode { val: 9, next: null 
            } 
        } 
    }   
 * 
 */

/**
* @param {ListNode} node
* @return {void} Do not return anything, modify node in-place instead.
*/
var deleteNode = function (node) {
    node.val = node.next.val
    node.next = node.next.next
};