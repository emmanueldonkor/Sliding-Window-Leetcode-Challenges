/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  //Using Sliding Window Approach
  let start = 0;
  let end = 1;
  let maxProfit = 0;
  while (end < prices.length) {
    let currentProfit = prices[end] - prices[start];
    maxProfit = Math.max(maxProfit, currentProfit);
    if (prices[end] < prices[start]) {
      start = end;
    }
    end++;
  }
  return maxProfit;
};
