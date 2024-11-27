// https://leetcode.com/problems/summary-ranges/description/
// First Attempt - Oct 29, 2024

// =============
// Problem
// =============

// You are given a sorted unique integer array nums.

// A range [a,b] is the set of all integers from a to b (inclusive).

// Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

// Each range [a,b] in the list should be output as:

// "a->b" if a != b
// "a" if a == b


// Example 1:
// Input: nums = [0,1,2,4,5,7]
// Output: ["0->2","4->5","7"]
// Explanation: The ranges are:
// [0,2] --> "0->2"
// [4,5] --> "4->5"
// [7,7] --> "7"

// Example 2:
// Input: nums = [0,2,3,4,6,8,9]
// Output: ["0","2->4","6","8->9"]
// Explanation: The ranges are:
// [0,0] --> "0"
// [2,4] --> "2->4"
// [6,6] --> "6"
// [8,9] --> "8->9"

// Constraints:
// 0 <= nums.length <= 20
// -231 <= nums[i] <= 231 - 1
// All the values of nums are unique.
// nums is sorted in ascending order.

// function summaryRanges(nums: number[]): string[] {

// };


// =============
// Solution 1
// =============

// Time: Beats 
// Space: Beats 

// __Inputs: integer array of unique integers sorted in ascending order. may not be consecutive
// __Outputs: String array with each element representing the ranges of unbroken consecutive integers


function summaryRanges(nums: number[]): string[] {
	let ans: string[] = [];

	for(let i = 0; i < nums.length; i++) {
		let start = nums[i]
		while(nums[i + 1] === nums[i] + 1) {
			continue;
		}
	}
};



