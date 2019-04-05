/**
 * 给一个有序数组
 * 变成高度平衡二叉搜索树
 * 高度平衡就是每个节点的左右子树高度不能差超过1
 */


'use strict'
var sortedArrayToBST = function (nums) {
    if (nums.length === 1) {
        return {
            val: nums[0],
            left: null,
            right: null
        }
    }
    const a = {}
    const iovx = parseInt(nums.length / 2)
    const l = nums.splice(0, iovx)
    const r = nums.splice(1)
    a.val = nums[0]
    a.left = sortedArrayToBST(l)
    a.rigth = sortedArrayToBST(r)
    return a
};
var q = [-10, -3, 0, 5, 9]
console.log(sortedArrayToBST(q))