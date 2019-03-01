/**
 * 给定一个数组， 它的第 i 个元素是第 i 天的价格。

 设计一个算法来计算你所能获取的最大利润。 你可以尽可能地完成更多的交易。

 注意： 你不能同时参与多笔交易（ 你必须在再次购买前出售掉之前的）。

 示例 :
     输入: [7, 1, 5, 3, 6, 4]
 输出: 7
 解释: 在第 2 天（ 价格 = 1） 的时候买入，在第 3 天（ 价格 = 5） 的时候卖出
 这笔交易所能获得利润 = 5 - 1 = 4。
 随后， 在第 4 天（ 价格 = 3） 的时候买入， 在第 5 天（ 价格 = 6） 的时候卖出, 
 这笔交易所能获得利润 = 6 - 3 = 3。
 */

// other's better

//  我的
/**
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit = function (prices) {
    let price = 0, stock = prices[0];
    for (let i = 0; i < prices.length; i++) {
        if (prices[i + 1] < prices[i]) {
            price += prices[i] - stock;
            stock = prices[i + 1]
            console.log(stock)
        }
    }
    if (prices[prices.length - 1] > stock) {
        price += prices[prices.length - 1] - stock
    }
    return price
};


// 别人的
let omaxProfit = function (prices) {
    var maxtmp = 0;
    for (var i = 0; i < prices.length - 1; i++) {
        if (prices[i] < prices[i + 1]) {
            maxtmp += prices[i + 1] - prices[i];
        }
    }
    return maxtmp;
};