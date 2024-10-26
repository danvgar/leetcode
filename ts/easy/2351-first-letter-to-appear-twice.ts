// https://leetcode.com/problems/first-letter-to-appear-twice/description/
// First Attempt - Oct 28, 2024

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

// function repeatedCharacter(s: string): string {
    
// };

// =============
// Solution 1
// =============

// Time: Beats 100.00%
// Space: 12.84%

function repeatedCharacter(str: string): string {
  
  // Create a map with pairs char : count
  // iterate through string
  // if map has char, return char
  // else add char to map
  
  const map = {};

  for(const char of str) {
    if (map[char]) {
      return char;
    } else {
      map[char] = true;
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
