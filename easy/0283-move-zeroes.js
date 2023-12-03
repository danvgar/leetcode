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
	// create two pointers. pointer one starts at i, pointer two starts at i + 1
	let p1 = 0
	let p2 = 1
	// p1 represents the current zero found. we only care about when p1 finds a zero.
	// p2 represents the current non-zero found. we only care about when p2 finds a non-zero.
	while (p2 < nums.length) {
		// loop ends when p2 has successfully moved to the end of the array (aka it found no more non-zero integers
		// p1 stays in place. p2 keeps increasing until it finds the next non-zero, then swap elements between p1 and p2.
		if (nums[p1] !== 0) {
			// condition 1: p1 found non-zero --> increase p1 and p2
			p1++
			p2++
		} else if (nums[p2] === 0) {
			// condition 2: p1 found a zero and p2 found a zero --> maintain p1 but increase p2
			p2++
		} else if (nums[p2] !== 0) {
			// condition 3: p1 found a zero and p2 found a nonzero --> swap elements, then increase p1 and p2.
			[nums[p1], nums[p2]] = [nums[p2], nums[p1]]
			p1++
			p2++
		}
	}
	// return array
	return nums
};