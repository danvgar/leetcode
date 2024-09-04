// https://leetcode.com/problems/single-number/
// First Attempt - Nov 30, 2023


// =============
// Problem
// =============

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:
// Input: nums = [1, 2, 3, 1]
// Output: true

// Example 2:
// Input: nums = [1, 2, 3, 4]
// Output: false

// Example 3:
// Input: nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
// Output: true

// Constraints:
// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109


// =============
// PREP
// =============

// input will be an integer array of at least one element. integers may be negative or zero.
// output will be a boolean, returning true if the array contains any duplicate elements, and false if every element is unique. 


// =============
// Solution 1
// =============

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
	// option 1: checking for duplicates: does first index = last index for each element? (time complex of O(n))
	// time complexity of n
	// return true if at least one element's first index doesn't equal it's last index
	// return nums.some(element => nums.indexOf(element) !== nums.lastIndexOf(element))
	// breaks with incredibly large array due to time complexity

	// option 2: set size vs array length? (time complex of ???)
	return new Set(nums).size !== nums.length
};


console.log(containsDuplicate([1, 2, 3, 1], `Expected: true`))
console.log(containsDuplicate([1, 2, 3], `Expected: false`))
console.log(containsDuplicate([1], `Expected: false`))
console.log(containsDuplicate([-1, 1], `Expected: false`))
console.log(containsDuplicate([1, 1], `Expected: true`))
console.log(containsDuplicate([1, 1, 1], `Expected: true`))



