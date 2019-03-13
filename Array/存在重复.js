/**
 * Given an array of integers, find
 if the array contains any duplicates.

 Example 1:
     Input: [1, 2, 3, 1]
     Output: true

 Example 2:
     Input: [1, 2, 3, 4]
     Output: false
 */

 

 'use strict'
 /**
  * @param {number[]} nums
  * @return {boolean}
  */
 var containsDuplicate = function (nums) {
     // for(let i=0;i<nums.length;i++){
     //     if(nums.indexOf(nums[i],i+1)!=-1){
     //         return true
     //     }
     // }
     // return false

     // nums.sort()
     // for(let i=0;i<nums.length;i++){
     //     if(nums[i]==nums[i+1])return true
     // }
     // return false

     return new Set(nums).size !== nums.length
 };