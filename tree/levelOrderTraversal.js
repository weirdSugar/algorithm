/**
 * 给定一个二叉树，返回 逐层地，从左到右访问所有节点
       3
      / \
     9  20
       /  \
      15   7

    [
      [3],
      [9,20],
      [15,7]
    ]
 */



/**
* @param {TreeNode} root
* @return {number[][]}
*/
var levelOrder = function (root) {
    if (root === null) return []
    let re = []
    re.push([root.val])
    let tmp = [root.left, root.right]
    let len = tmp.length, i = 0, qq = []
    while (tmp.length !== 0) {
        len = tmp.length
        i = 0
        qq = []
        while (i < len) {
            let k = tmp.shift()
            if (k !== null) {
                qq.push(k.val)
                tmp.push(k.left)
                tmp.push(k.right)
            }
            i++
        }
        if (qq.length !== 0) re.push(qq)
    }
    return re
};