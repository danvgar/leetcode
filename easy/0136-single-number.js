// https://leetcode.com/problems/single-number/
// First Attempt - Nov 18, 2023


// =============
// Problem
// =============

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:
// Input: nums = [2,2,1]
// Output: 1

// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4

// Example 3:
// Input: nums = [1]
// Output: 1

// Constraints:
// 1 <= nums.length <= 3 * 104
// -3 * 104 <= nums[i] <= 3 * 104
// Each element in the array appears twice except for one element which appears only once.

// =============
// PREP
// =============

// input will be an integer array, with every number ofccuring twice except for one. no need to test for any edge cases such as empty arrays or numbers as strings. 
// will string ever NOT have an integer that appears only once?

// output will be the integer that appears only once in the given array.

// =============
// Solution 1
// =============

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
	// loop through array
	for (let i = 0; i < nums.length; i++) {
		// count quantity of that character within array. (arr.filter( (element, i) => element === arr[i]).length)
		if (nums.filter( element => element === nums[i]).length === 1) {
			// if quantity === 1, return element
			return nums[i]
		}
	}
};

console.log(singleNumber([1, 2, 2]), `Expected: 1`) // sorted array
console.log(singleNumber([4, 1, 3, 3, 4]), `Expected: 1`) // unsorted array
console.log(singleNumber([1]), `Expected: 1`) // single integer in array

