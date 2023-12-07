// https://leetcode.com/problems/majority-element/
// First Attempt - Dec 6, 2023


// =============
// Problem
// =============

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:
// Input: nums = [3,2,3]
// Output: 3

// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// Constraints:
// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109

// Follow-up: Could you solve the problem in linear time and in O(1) space?


// =============
// PREP
// =============

// input will be an integer array, where one element appears more than the others
// output will be to return the element that appears the most amount of times in the array

// edge cases?
// will array ever be empty? null? undefined?
// will array ever have more than one element appearing the most amount of times?
// will numbers ever be represented as strings?
// test cases long enough to break O(n)?

// =============
// Solution 1
// =============

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
	// create Set of unique elements in nums
	const uniques = new Set(nums)
	let maxQty = 0
	let maxElement = 0
	for (const unique of uniques) {
		currentQty = nums.filter(num => num === unique).length
		if (currentQty > maxQty) {
			maxQty = currentQty
			maxElement = unique
		}
	}
	return maxElement
};

// study solutions