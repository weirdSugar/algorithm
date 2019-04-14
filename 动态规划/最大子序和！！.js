/**
给定一个整数数组 nums ，
找到一个具有最大和的连续子数组（子数组最少包含一个元素），
返回其最大和。

示例:
输入: [-2,1,-3,4,-1,2,1,-5,4],
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 */


//精妙的算法，sum探路，如果大于0就莽头加，反正是res=Math.max
//并没有管前面的如何



/**
* @param {number[]} nums
* @return {number}
*/
var maxSubArray = function (nums) {
    let sum = 0, res = nums[0];
    for (var itm of nums) {
        if (sum > 0) sum += itm
        else sum = itm
        res = Math.max(sum, res)
    }
    return res
};