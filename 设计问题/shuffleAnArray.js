/**
打乱一个没有重复元素的数组。

示例:
// 以数字集合 1, 2 和 3 初始化数组。
int[] nums = {1,2,3};
Solution solution = new Solution(nums);

// 打乱数组 [1,2,3] 并返回结果。任何 [1,2,3]的排列返回的概率应该相同。
solution.shuffle();

// 重设数组到它的初始状态[1,2,3]。
solution.reset();

// 随机返回数组[1,2,3]打乱后的结果。
solution.shuffle();
 */

'use strict'
var Solution = function (nums) {
    this.nums = [...nums]
    this.cur = [...nums]
    this.len = nums.length
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
    return this.nums
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
    var len = this.len
    var ran = 0
    for (let i = 0; i < this.len; i++) {
        ran = Math.floor(Math.random() * len)
        let tmp = this.cur[ran]
        this.cur[ran] = this.cur[i]
        this.cur[i] = tmp
    }
    return this.cur
};