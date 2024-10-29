// https://leetcode.com/problems/single-number/
// First Attempt - Oct 27, 2024

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
// Solution 1
// =============

// Time: Beats 17.01%
// Space: Beats 12.99%

// __Inputs 
// number[] -> every element appears twice except one

// __Outputs: 
// - element that appears only once 

function singleNumber(nums: number[]): number {
	// map with counter of each element -> value : counter
	// iterate through array, and set counter for each element 
	// look up element in map with count of 1

	if (nums.length < 2) return nums[0]

	const map = {};

	for (const num of nums) {
		if (!map[num]) {
			map[num] = 1;
		}
		else {
			map[num] += 1
		}
	}

	for (const num of nums) {
		if (map[num] === 1) return num
	}
};

console.log((singleNumber([2, 2, 1])), 1);
console.log((singleNumber([4, 1, 2, 1, 2])), 4);
console.log((singleNumber([1])), 1);




