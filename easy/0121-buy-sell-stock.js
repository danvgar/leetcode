// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
// First Attempt - Aug 6, 2024

// =============
// Problem
// =============

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Example 2:
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

// Constraints:
// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104

// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
// var maxProfit = function(prices) {

// };

// =============
// Solution 1
// =============

// Inputs: integer array, representing stock prices per day
// Outputs: integer, representing maximum profit one can make by buying on one day and selling on another day
// You must buy first, and sell second, such that the sell day must always be after the buy day
// Assume for this example that you have access to the entire week (e.g. you know in the future the stock will go up in price. don't think too hard about this in a real world logic)

// Edge-cases:
// If no profit, return 0
// Input will always be an integer array, no other data structures such as a list or data types such as integer as a string.
// No other error catching

// Brute Force: O(n^2) time -> nested for-loop, check every combination

// Method 1: O(n) time -> iterate once but keep track of max_profit and min_price
// Essentially want to iterate through array and compare current element with min_price. if current element is lower, it becomes min_price
// Then want to replace max_profit = current element - min_price, if this max_profit is greater than current max_profit.

/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {
  console.log(`\nInput: prices ${prices}`);
  let maxProfit = 0;
  let minPrice = prices[0];

  // Skip first index as this is already minPrice.
  for (price in prices) {
    // [7, 1, 5, 3, 6, 4]
    if (let price < minPrice) {
      minPrice = price;
    } else if (price - minPrice > maxProfit) {
      maxProfit = price - minPrice;
    }
  }
console.log(`Output: maxprofit ${maxProfit}`)
  return maxProfit;
};

// Examples:
console.log(maxProfit([7, 1, 5, 3, 6, 4]), `Expected: 5`); // buy on 1, sell on 6 -> 6 - 1 = 5
console.log(maxProfit([7, 6, 4, 3, 1]), 'Expected: 0'); // no profit, return 0
console.log(maxProfit([1, 1, 1, 1, 1]), 'Expected: 0'); // no profit, return 0
