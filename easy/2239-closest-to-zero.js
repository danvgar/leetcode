// https://leetcode.com/problems/find-closest-number-to-zero/description/
// First Attempt - Aug 24, 2024
// Second Attempt - Aug 24, 2024

// =============
// Problem
// =============

// Given an integer array nums of size n, return the number with the value closest to 0 in nums. If there are multiple answers, return the number with the largest value.

// Example 1:
// Input: nums = [-4,-2,1,4,8]
// Output: 1
// Explanation:
// The distance from -4 to 0 is |-4| = 4.
// The distance from -2 to 0 is |-2| = 2.
// The distance from 1 to 0 is |1| = 1.
// The distance from 4 to 0 is |4| = 4.
// The distance from 8 to 0 is |8| = 8.
// Thus, the closest number to 0 in the array is 1.

// Example 2:
// Input: nums = [2,-1,1]
// Output: 1
// Explanation: 1 and -1 are both the closest numbers to 0, so 1 being larger is returned.

// Constraints:
// 1 <= n <= 1000
// -105 <= nums[i] <= 105

// =============
// Solution 1 - 79.4%
// =============

// Input: integer array with at least one element. no edge-cases to consider (e.g. empty array, numbers as strings, null, NaN, etc). Input will not be pre-sorted.

// Output: the element of the array that is the closest to zero. if multiple values, return the largest value.

// Option 1: Brute force - O(n)
// let closest = nums[i]
// loop through array from index 1 to end, because by default our answer will be the first index
// if abs(element) < abs(closest), closest = element
// return closest

/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function (nums) {
  let closest = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (Math.abs(nums[i]) === Math.abs(closest)) {
      closest = Math.max(nums[i], closest);
    }
    if (Math.abs(nums[i]) < Math.abs(closest)) {
      closest = nums[i];
    }
  }
  return closest;
};

// Optimizations:
// each if statement is running separately, which is increasing operating time. May be worth combining if statements using logic operators
// storing nums[i] into a value may reduce read times when finding nums[i]. consider currentVal = nums[i]
//

// =============
// Solution 2 - 39.5%
// =============

/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function (nums) {
  let closest = nums[0];
  for (let i = 1; i < nums.length; i++) {
    // when should closest be replaced with currentElement?
    // when abs(current) < abs(closest) || when abs(current) === abs(closest) && current > closest
    if (
      Math.abs(nums[i]) < Math.abs(closest) ||
      (Math.abs(nums[i] === Math.abs(closest)) && nums[i] > closest)
    ) {
      closest = nums[i];
    }
  }
  return closest;
};



// =============
// Solution 3 - 98.39%
// =============

/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function (nums) {
  let closest = nums[0];
  for (let i = 1; i < nums.length; i++) {
    let currentVal = nums[i]
    if (Math.abs(currentVal) === Math.abs(closest)) {
      closest = Math.max(currentVal, closest);
    }
    if (Math.abs(currentVal) < Math.abs(closest)) {
      closest = currentVal;
    }
  }
  return closest;
};


// =============
// Tests
// =============

console.log(findClosestNumber([-4, -2, 1, 4, 8]), "Expected: 1");
console.log(findClosestNumber([2, -1, 1]), "Expected: 1");
console.log(findClosestNumber([2, -1, 1]), "Expected: 1");
console.log(findClosestNumber([0]), "Expected: 0");

// =============
// Important Lessons
// =============

// An array of only negative numbers is a valid input, but also means you can't just start by using the absolute value of each number.
// Example that doesn't work:
// const absNums = nums.map((num) => Math.abs(num));
// return Math.min(...absNums);

// Note: Simply storing nums[i] in a variable is a faster optimization than doing that read operation every time. (See Solution 1 vs Solution 3)