// https://leetcode.com/problems/two-sum/
// First Attempt - Oct 21, 2023


// =============
// Problem
// =============

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:
// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

// function twoSum(nums: number[], target: number): number[] {

// };

// =============
// Attempt 1
// =============
// Time: Beats 96.90%
// Space: Beats 10.06%

// __Inputs: 
// nums, number[] -> unsorted integer array.
// - at least length 2
// - integers may be negative, positive, or zero
// target, number -> may be negative, positive, or zero

// __Outputs:
// number[] -> indices of the two elements in the array that add to the target value 

function twoSum(nums: number[], target: number): number[] {
    // create a Map -> val: index 
    // if map has a value that satisfies (val === target - currentVal), return val index and currentVal index 
    // else if map doesn't have that value, add currentVal to map with its index
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i]; 
        } else {
            map.set(nums[i], i);
        }
    }
    return undefined;
};

console.log(twoSum([2, 7, 11, 15], 9), "(Expected: [0,1])")
console.log(twoSum([3, 2, 4], 6), "(Expected: [1,2])")
console.log(twoSum([3, 3], 6), "(Expected: [0,1])")