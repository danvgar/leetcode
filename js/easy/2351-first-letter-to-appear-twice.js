// https://leetcode.com/problems/first-letter-to-appear-twice/description/
// First Attempt - Sept 1, 2024

// =============
// Problem
// =============

// Given a string s consisting of lowercase English letters, return the first letter to appear twice.

// Note:
// // A letter a appears twice before another letter b if the second occurrence of a is before the second occurrence of b.
// // s will contain at least one letter that appears twice.

// Example 1:
// Input: s = "abccbaacz"
// Output: "c"
// Explanation:
// // The letter 'a' appears on the indexes 0, 5 and 6.
// // The letter 'b' appears on the indexes 1 and 4.
// // The letter 'c' appears on the indexes 2, 3 and 7.
// // The letter 'z' appears on the index 8.
// // The letter 'c' is the first letter to appear twice, because out of all the letters the index of its second occurrence is the smallest.

// Example 2:
// Input: s = "abcdd"
// Output: "d"
// Explanation:
// // The only letter that appears twice is 'd' so we return 'd'.

// Constraints:
// // 2 <= s.length <= 100
// // s consists of lowercase English letters.
// // s has at least one repeated letter.

// =============
// Solution 1 - 14.11%
// =============
// Use array to track

// Input: string with at least one repeated letter. string will always be a valid string of at least two characters and only using lowercase letters.
// Output: the first letter to appear twice
// Edge Cases: Will string only be alphabetical letters? No numbers, punctuation, etc?

// Method 1 - Hash Map with counter per key-value pair
// Method 2 - Add to array
// Possible because we know array will never grow bigger than 26.
// Not ideal if we want to expand in the future to larger set

/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (str) {
  // let currentSet = [];
  let currentSet = [];
  // for char of str
  for (char of str) {
    // if currentSet does not contain char, add char to currentSet
    if (!currentSet.includes(char)) {
      currentSet.push(char);
    }
    // else if currentSet includes char, return char
    else if (currentSet.includes(char)) {
      return char;
    }
  }
};

// =============
// Solution 2 - 11.78%
// =============
// Use Set to track

/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (str) {
  // let currentSet = [];
  let currentSet = new Set();
  // for char of str
  for (const char of str) {
    // if currentSet does not contain char, add char to currentSet
    if (!currentSet.has(char)) {
      currentSet.add(char);
    }
    // else if currentSet includes char, return char
    else if (currentSet.has(char)) {
      return char;
    }
  }
};

// =============
// Solution 3 - 64.88%
// =============
// Use Map to track

/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (str) {
  // let currentSet = [];
  let currentSet = new Map();
  // for char of str
  for (const char of str) {
    // if currentSet does not contain char, add char to currentSet
    if (!currentSet.has(char)) {
      currentSet.set(char, 1);
    }
    // else if currentSet includes char, return char
    else if (currentSet.has(char)) {
      return char;
    }
  }
};

// =============
// Tests
// =============

console.log(repeatedCharacter("abccbaacz"), "Expected: c");
console.log(repeatedCharacter("abcdd"), "Expected: d");

// =============
// Important Lessons
// =============

// Because string is only consisting of lowercase alphabetic letters, we are limited to checking a set of 26 characters

// Array vs Set approach is relatively the same, but using a Map has significant improvements do to improved read times.
