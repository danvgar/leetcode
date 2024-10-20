// https://leetcode.com/problems/palindrome-number/
// First Attempt - Nov 10, 2023


// =============
// Problem
// =============

// Given an integer x, return true if x is a
// palindrome, and false otherwise.

// Example 1:
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Example 2:
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads - 121. From right to left, it becomes 121 -.Therefore it is not a palindrome.

// Example 3:
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left.Therefore it is not a palindrome.

// Constraints:
// -2^31 <= x <= 2^31 - 1

// Follow up: Could you solve it without converting the integer to a string ?

// /**
//  * @param {number} x
//  * @return {boolean}
//  */
// var isPalindrome = function (x) {

// };


// =============
// PREP
// =============

// input will be any integer between and inclusive of -2^31 and 2^31 - 1. input will not be a number as a string, null, undefined, or any other data types or funny business.
// output will be a boolean, where true is if the number is a palindrome (same number when reversed)

// special cases
// by default, negative numbers cannot be palindromes


// =============
// Solution 1
// =============

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    // if x is less than zero, return false
    if (x < 0) return false
    // convert x to string, split string into array, reverse array, join array. 
    let reverseX = String(x).split("").reverse().join("")
    // return if reversed number === x. compare string x vs final answer
    return reverseX === String(x)
}

// (runtime 130ms)
// (memory 51 MB)