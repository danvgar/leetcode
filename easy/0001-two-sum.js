// https://www.codewars.com/kata/59e66e48fc3c499ec5000103/train/javascript
// First Attempt - Oct 27, 2023
// Second Attempt - Mar 28, 2024


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


// =============
// Attempt 1, Solution 1
// =============

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // console.log(`Initial Array: ${nums}`)
    // console.log(`Target: ${target}`)
    for (let i = 0; i < nums.length; i++) {
        // console.log(`Value at i Index ${i}: ${nums[i]}`)
        for (let j = 1; j < nums.length; j++) {
            if (i === j) {
                // Cannot use the same element twice, so skip this condition in the loop
                continue
            }
            // console.log(`Value at k Index ${j}: ${nums[j]}`)
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
}

console.log(twoSum([2, 7, 11, 15], 9), "(Expected: [0,1])")
console.log(twoSum([3, 2, 4], 6), "(Expected: [1,2])")
console.log(twoSum([3, 3], 6), "(Expected: [0,1])")

// =============
// Attempt 1, Solution 2
// =============

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // Using ES6 Map() functionality
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            // If map has a number that equals the target number minus the current element in the loop, return that number's index and the current index. 
            return [map.get(target - nums[i]), i];
        } else {
            // Typically, add key-value pair: the element and it's index. 
            map.set(nums[i], i);
        }
    }
    return [];
};

console.log(twoSum([2, 7, 11, 15], 9), "(Expected: [0,1])")
console.log(twoSum([3, 2, 4], 6), "(Expected: [1,2])")
console.log(twoSum([3, 3], 6), "(Expected: [0,1])")


// =============
// Attempt 2, Solution 1
// =============

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// input is an integer array, and an integer target
// output is an integer array, representing the indices of the two numbers that add to the target value. 
// // every test case will have a solution
// // every test case will have exactly one solution
// // don't count the same element twice
// // order does not matter 

var twoSum = function (nums, target) {
    // nums[i] + nums[j] = target 
    // nums[j] = target - nums[i]
    // Option 1 - Brute Force. Compare every element to every element after it. 
    // Option 2 - Two-Pass Hash Map. Add every element to a hash map, then check each value against it. 
    // Option 3 - One-Pass Hash Map. Add every element as you go.

    // Create hashmap object. 
    let map = new Map();
    // loop through array
    for (let i = 0; i < nums.length; i++) {
        // if target - nums[i] exists in hashmap, return indices of element and num[i]
        let goal = target - nums[i]
        if (map.has(goal)) {
            return [map.get(goal), i]
        }

        // else, add current element to hash map and continue loop
        else {
            // Store values as check:return, so val:index
            map.set(nums[i], i)
        }
    }
}

console.log(twoSum([2, 7, 11, 15], 9), `Expecting: [0, 1]`)
console.log(twoSum([3, 2, 4], 6), `Expecting: [1, 2]`)
console.log(twoSum([3, 3], 6), `Expecting: [0, 1]`)

