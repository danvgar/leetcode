// https://leetcode.com/problems/missing-number/
// First Attempt - Nov 19, 2023
// Second Attempt - Dec 4, 2023


// =============
// Problem
// =============

// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// Example 1:
// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

// Example 2:
// Input: nums = [0,1]
// Output: 2
// Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

// Example 3:
// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8
// Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

// Constraints:
// n == nums.length
// 1 <= n <= 104
// 0 <= nums[i] <= n
// All the numbers of nums are unique.

// Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?


// =============
// PREP
// =============

// input will be an unsorted positive-integer array, with a sequence of numbers except one missing number. if no number is missing, the missing number is the missing end of the sequence.
// output will be the integer missing from this array, 


// =============
// Attempt 1
// =============

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
	// if you don't care about altering original array, sort original array.
	// otherwise make a shallow copy
	// find item in array where nums[i + 1] - nums[i] is not equal to 1.
	return nums.sort((a, b) => a - b).find((item, i) => nums[i + 1] - item > 1) + 1 || Math.max(...nums) + 1
	// return nums[i] + 1
};

// odd edge cases. need to revisit.
// issue is I'm not considering that we are solving for [0, n] where n is nums.length. Missing number could be the last number.

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]), `Expected: 8`)
console.log(missingNumber([3, 0, 1]), `Expected: 2`)
console.log(missingNumber([0, 1]), `Expected: 2`)


// =============
// Solution 1
// =============

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    // create array of consecutive integers from [0, n], where n is length of nums
    // sort nums in ascending order
    // if nums[i] !== completenums[i], return completenums[i]
    const completeNums = Array.from(Array(nums.length + 1), (_, i) => i)
    nums.sort((a, b) => a - b)
    for (let i = 0; i < completeNums.length; i++) {
        if (nums[i] !== completeNums[i]) {
            return completeNums[i]
        }
    }
	// technically works. but time and space complexity is O(n). Not necessarily the most ideal solution. 
};