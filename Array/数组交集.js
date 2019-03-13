
/**
 * 
 * 给定两个数组， 编写一个函数来计算它们的交集。

 示例 1:
     输入: nums1 = [1, 2, 2, 1], nums2 = [2, 2]
 输出: [2, 2]

 示例 2:
     输入: nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4]
 输出: [4, 9]

 进阶:
     如果给定的数组已经排好序呢？ 你将如何优化你的算法？
 如果 nums1 的大小比 nums2 小很多， 哪种方法更优？
 如果 nums2 的元素存储在磁盘上， 磁盘内存是有限的， 并且你不能一次加载所有的元素到内存中， 你该怎么办？
 *  
 *  
 */



 'use strict'
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    const result = [];

    for (const num of nums1) {
        const found = nums2.indexOf(num);

        if (found > -1) {
            result.push(num);
            nums2.splice(found, 1);
        }
    }

    return result



    //     const record = {};
    //     for (let i = 0; i < nums1.length; i++) {
    //         if (record[nums1[i]]) {
    //             record[nums1[i]]++;
    //         } else {
    //             record[nums1[i]] = 1;
    //         }
    //     }
    //     const result = [];
    //     for(let j = 0; j < nums2.length; j++) {
    //         if (record[nums2[j]] > 0) {
    //             result.push(nums2[j]);
    //             record[nums2[j]] --;
    //         }
    //     }
    //     return result;
};