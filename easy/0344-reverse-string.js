// https://leetcode.com/problems/reverse-string/
// First Attempt - Nov 15, 2023


// =============
// Problem
// =============

// Write a function that reverses a string.The input string is given as an array of characters s.

// You must do this by modifying the input array in -place with O(1) extra memory.

// Example 1:
// Input: s = ["h", "e", "l", "l", "o"]
// Output: ["o", "l", "l", "e", "h"]

// Example 2:
// Input: s = ["H", "a", "n", "n", "a", "h"]
// Output: ["h", "a", "n", "n", "a", "H"]

// Constraints:
// 1 <= s.length <= 105
// s[i] is a printable ascii character.

// /**
//  * @param {character[]} s
//  * @return {void} Do not return anything, modify s in-place instead.
//  */
// var reverseString = function (s) {

// };


// =============
// PREP
// =============

// input will be an array of characters. no other edge cases need to be tested.
// output will be the same array reversed. output must modify the input array with 0(1) memory. do not use .reverse function


// =============
// Solution 1
// =============

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
	let leftpoint = 0
	let rightpoint = s.length - 1
	while (leftpoint < rightpoint) {
		console.log(`Starting Loop: ${s}, s[${leftpoint}] = ${s[leftpoint]}, s[${rightpoint}] = ${s[rightpoint]}`); // this code only runs with the above semi-colon and I have absolutely no idea why. 
		[s[leftpoint], s[rightpoint]] = [s[rightpoint], s[leftpoint]]
		console.log(`End Loop: ${s}, s[${leftpoint}] = ${s[leftpoint]}, s[${rightpoint}] = ${s[rightpoint]}`)
		leftpoint++
		rightpoint--
	}
};


