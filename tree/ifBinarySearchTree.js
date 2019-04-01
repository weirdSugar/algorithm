/**
 * 给定一个二叉树，判断其是否是一个有效的二叉搜索树。

假设一个二叉搜索树具有如下特征：
节点的左子树只包含小于当前节点的数。
节点的右子树只包含大于当前节点的数。
所有左子树和右子树自身必须也是二叉搜索树。
 */

// var root={
//     val:5,
//     left:{
//         val:1,
//         left:null,
//         right:null
//     },
//     right:{
//         val:4,
//         left:{
//             val:3,
//             left:null,
//             right:null
//         },
//         right:{
//             val:6,
//             left:null,
//             right:null
//         }
//     }
// }
// var root={
//     val:1,
//     left:{
//         val:1,
//         left:null,
//         right:null
//     },
//     right:null
// }
var root = {
    val: 0,
    left: null,
    right: null
}




/**
 * 中序遍历
 * 所得数组为递增
 */
// var a = []
// var isValid=function(root){
//     if(root===null){
//         return
//     }
//     isValid(root.left)
//     a.push(root.val)
//     isValid(root.right)
// }
// isValid(root)
// var i=0
// console.log(a)
// while(i<a.length-1){
//     if(a[i]>a[i+1]){
//         console.log("false")
//         break;
//     }
//     i++
// }
// console.log('true')




/**
 * 也是中序遍历
 * 直接去遍历
 */
let last = -93232
var isValidBST = function (root) {
    if (root === null) {
        return true
    }
    if (isValidBST(root.left)) {
        if (last < root.val) {
            last = root.val
            return isValidBST(root.right)
        }
    }
    return false
};
console.log(isValidBST(root))



