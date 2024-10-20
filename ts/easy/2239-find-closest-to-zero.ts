// https://leetcode.com/problems/find-closest-number-to-zero/description/
// Third Attempt - Oct 20, 2024

// =============
// Problem
// =============

// Given an integer array nums of size n, return the number with the value closest to 0 in nums. If there are multiple answers, return the number with the largest value.

// Example 1:
// Input: nums = [-4,-2,1,4,8]
// Output: 1
// Explanation:
// The distance from -4 to 0 is |-4| = 4.
// The distance from -2 to 0 is |-2| = 2.
// The distance from 1 to 0 is |1| = 1.
// The distance from 4 to 0 is |4| = 4.
// The distance from 8 to 0 is |8| = 8.
// Thus, the closest number to 0 in the array is 1.

// Example 2:
// Input: nums = [2,-1,1]
// Output: 1
// Explanation: 1 and -1 are both the closest numbers to 0, so 1 being larger is returned.

// Constraints:
// 1 <= n <= 1000
// -105 <= nums[i] <= 105

// =============
// Attempt 1
// =============

// Time: Beats 100.00%
// Space: Beats 41.39%

// __Inputs:
// nums: number[] -> unsorted integer array, with negative, zero, or positive integers
// - Array will always be at least length 1.

// __Outputs:
// number -> the integer whose absolute value is closest to zero. note: not returning absolute value.
// if two numbers are the same distance (e.g. -1, 1), return the positive number. 

// Approach 1: Brute Force
// distances are just absolute values of numbers.
// let closest = Math.abs(nums[0])
// for num of array
// let distance = Math.abs(num)
// if distance < closest, closest = num

// if nums.includes(Math.abs(closest)), return Math.abs(closest)
// else, return closest


function findClosestNumber(nums: number[]): number {
    let closest: number = nums[0];
    for (let num of nums) {
        let distance: number = Math.abs(num);
        if (distance < Math.abs(closest)) {
            closest = num;
        }
    }
    if (nums.includes(Math.abs(closest))) {
        return Math.abs(closest);
    } else {
        return closest;
    }
};

// =============
// Tests
// =============

console.log(findClosestNumber([-4, -2, 1, 4, 8]), "Expected: 1");
console.log(findClosestNumber([2, -1, 1]), "Expected: 1");
console.log(findClosestNumber([2, -1, 1]), "Expected: 1");
console.log(findClosestNumber([0]), "Expected: 0");
