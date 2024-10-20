// https://leetcode.com/problems/return-length-of-arguments-passed/description/
// First Attempt - Nov 14, 2023


// =============
// Problem
// =============

// Write a function argumentsLength that returns the count of arguments passed to it.

// Example 1:
// Input: args = [5]
// Output: 1
// Explanation:
// argumentsLength(5); // 1
// One value was passed to the function so it should return 1.

// Example 2:
// Input: args = [{}, null, "3"]
// Output: 3
// Explanation:
// argumentsLength({}, null, "3"); // 3
// Three values were passed to the function so it should return 3.

// Constraints:
// args is a valid JSON array
// 0 <= args.length <= 100


// =============
// PREP
// =============

// input will be two integer arrays, both already sorted from least to greatest value.
// edge cases? other data types to consider?
// either list may be empty. two empty arrays should return an empty array. one empty array should just return the non-empty array. 

// output will be a single array, with each element from the two arrays included in sorted order. 
// if two elements are the same, no need to consider which one comes first in the array. 

// function cannot just concatenate both lists and re-sort them?


// =============
// Solution 1
// =============

/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
	return arguments.length
};

/**
 * argumentsLength(1, 2, 3); // 3
 */