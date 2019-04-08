/**
 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 每次你可以爬 1 或 2 个台阶。
 有多少种不同的方法可以爬到楼顶
 */

// 我想的 O(2^n)太他妈慢咯
/**
* @param {number} n
* @return {number}
*/
var climbStairs = function (n) {
    //let num=0
    //var climb = function(n) {
    //    for(let i=1;i<3;i++){
    //         if((n-i)===0){
    //             num++
    //             break;
    //         }else{
    //             climb(n-i)   
    //         }
    //     }
    // }
    // climb(n)
    // return num
}


/**
 * 分析哈第i层楼梯怎么走
 * 可以是 i-1 走一步 或者 i-2 走两步两种情况
 * dp表示方法总数 则
 * dp[i]=dp[i-1]+dp[i-2]
 */
var climbStairs=function(n){
    if (n == 1) return 1
    let dp = new Array(n).fill(0)
    dp[0] = 1, dp[1] = 2;
    for (i = 2; i < n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n - 1]
}



/**
 * ↑ 分析可得就是个斐波那契数列
1  1
2  2
3  3
4  5
5  8

*/