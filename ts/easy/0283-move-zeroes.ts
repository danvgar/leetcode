// https://leetcode.com/problems/move-zeroes/
// First Attempt - Nov 22, 2024


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
// Solution 1
// =============

/**
 Do not return anything, modify nums in-place instead.
 */
 function moveZeroes(nums: number[]): void {
    
	// Two Pointers (indices)
	// P1 and P2 start at index 0 and 1 respectively.
	// Increment both UNTIL P1 is pointing at the first zero.
	// If both P1 and P2 are pointing at zeroes, increment P2.
	// Repeat until P1 is at a zero and P2 is at a non-zero.
	// Whenever P1 points at a zero and P2 points at a non-zero, swap the two elements
	// End loop once P2 is pointing at the last element. 


	let p1: number = 0; // zero pointer
	let p2: number = 1; // non-zero pointer

	while (p2 <= nums.length) {
		if(nums[p1] !== 0) { // p1 needs to find zero
			p1++;
			p2++;
		} else if (nums[p2] === 0) { // p2 needs to find non-zero
			p2++;
		} else if ((nums[p1] === 0) && (nums[p2] !== 0)) { // once they do, swap the elements
			[nums[p1], nums[p2]] = [nums[p2], nums[p1]]
		}
	}
 };