// https://leetcode.com/problems/move-zeroes/
// First Attempt - Dec 2, 2023


// =============
// Problem
// =============

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Example 2:
// Input: nums = [0]
// Output: [0]

// Constraints:
// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1

// Follow up: Could you minimize the total number of operations done?


// =============
// PREP
// =============

// input will be an integer array
// output will be the same integer array, in the same order, but with all zeroes moved to the front


// =============
// Solution 1
// =============

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
	console.log(`\nInput: ${nums}`)
	for (let i = 0; i < nums.length; i++) {
		console.log(`Current Index: ${i}`)
		if (nums[i] === 0) {
			nums.push(nums[i])
			nums.splice(i, 1)
		}
	}
	return nums
};

// revisit