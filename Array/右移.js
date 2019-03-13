/**
 * Given an array, rotate the array to the right by k steps, where k is non - negative.
 Example :
     Input: [1, 2, 3, 4, 5, 6, 7] and k = 3
     Output: [5, 6, 7, 1, 2, 3, 4]

     Note:
         Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
         Could you do it in -place with O(1) extra space ?
 */


 'use strict'
/**
* @param {number[]} nums
* @param {number} k
* @return {void} Do not return anything, modify nums in-place instead.
*/
let rotate = function (nums, k) {
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop())
    }
};

// let rotate = function(nums, k) {
//     let n=nums.length
//     k=k%n;
//     nums.unshift([...nums.splice(n-k)])
// };

// 三次reverse