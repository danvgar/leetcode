// https://leetcode.com/problems/binary-search/description/
// First Attempt - Sept 3, 2024

// =============
// Problem
// =============

// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// Example 2:
// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

// Constraints:
// 1 <= nums.length <= 104
// -104 < nums[i], target < 104
// All the integers in nums are unique.
// nums is sorted in ascending order.

// =============
// Solution 1 - 46.04%
// =============

// Input: two parameters: sorted integer array, from least to greatest, and target number to search. Input may contain negative or zero integers. all integers are unique
// Output: the index of the target number's position in the array. if it isn't found, return -1. function must run in O(nlogn)
// Edge-cases: input will never be null, NaN, undefined, etc. integers will not be strings.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // Use binary search
  // L represents first index of search subarray, R represents last index of search subarray
  // at start, L === 0, R === nums.length - 1
  // Middle index for binary search shall be M = Math.floor(L + R / 2)
  let leftIndex = 0;
  let rightIndex = nums.length - 1;
  let searchIndex = Math.floor((leftIndex + rightIndex) / 2);

  // while L <= R
  while (leftIndex <= rightIndex) {
    // if nums[M] === target, return M
    if (nums[searchIndex] === target) {
      console.log("nums[searchIndex] === target?", nums[searchIndex] === target)
      return searchIndex;
    }
    // if nums[M] > target, R = M - 1, start over
    if (nums[searchIndex] < target) {
      console.log("nums[searchIndex] < target?", nums[searchIndex] < target)
      leftIndex = searchIndex + 1;
      searchIndex = Math.floor((leftIndex + rightIndex) / 2);
    }
    // if nums[M] < target, L = M + 1, start over
    if (nums[searchIndex] > target) {
      console.log("nums[searchIndex] > target?", nums[searchIndex] > target)
      rightIndex = searchIndex - 1;
      searchIndex = Math.ceil((leftIndex + rightIndex) / 2);
    }
  }
  // once while condition broken
  // return -1
  return -1;
};

// =============
// Tests
// =============

console.log(search([-1, 0, 3, 5, 9, 12], 9), "Expected: 4"); // 9 is at index 4 so return 4
console.log(search([-1, 0, 3, 5, 9, 12], 2), "Expected: -1"); // 2 doesn't exist so return -1

// =============
// Important Lessons
// =============
