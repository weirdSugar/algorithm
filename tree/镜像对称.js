/**
       1
      / \
     2   2
    / \ / \
   3  4 4  3    对称


                本想中序遍历所得数组为回文
                下面为反例

       1
      / \
     2   3
    /   / 
   3   2        非对称
   
*/ 


/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    // 递归
    // if(!root)return true
    // function digui(l,r){
    //     if(l===null&&r===null)return true
    //     if(l===null||r===null)return false
    //     return l.val===r.val&&digui(l.left,r.right)&&digui(l.right,r.left)
    // }
    // return digui(root.left,root.right)


    // 迭代
    if (!root) return true
    let a = []
    a.push(root.left)
    a.push(root.right)
    while (a.length !== 0) {
        let t1 = a.pop()
        let t2 = a.pop()
        if (t1 === null && t2 === null) continue;
        if (t1 === null || t2 === null) return false
        if (t1.val !== t2.val) return false
        a.push(t1.left)
        a.push(t2.right)
        a.push(t1.right)
        a.push(t2.left)
    }
    return true
};