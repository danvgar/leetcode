// https://leetcode.com/problems/is-subsequence/description/
// First Attempt - Dec 1, 2024

// =============
// Problem
// =============

// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Example 1:
// Input: s = "abc", t = "ahbgdc"
// Output: true

// Example 2:
// Input: s = "axc", t = "ahbgdc"
// Output: false

// Constraints:
// 0 <= s.length <= 100
// 0 <= t.length <= 104
// s and t consist only of lowercase English letters.

// Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 109, and you want to check one by one to see if t has its subsequence. In this scenario, how would you change your code?

// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
// var isSubsequence = function(s, t) {

// };

// =============
// Solution 1
// =============

// Beats Time: 76.8%
// Beats Space: 26.9%

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  const lengthS = s.length;
  const lengthT = t.length;

  // Base Cases
  if (lengthS > lengthT) return false;
  if (s === "") return true;

  // i is position in t
  // s is position in j

  let j = 0;
  for (let i = 0; i < lengthT; i++) {
    if (t[i] === s[j]) {
      // if characters equal
      if (j === lengthS - 1) {
        // if they equal AND we've reached end of s, we're done
        return true;
      }
      j++; // if we're not at end of s yet, increment to next letter of s and keep going
    }
  }

  // if we went through the entire process and we never made it to the end of s, then we failed.

  return false;
};

// =============
// Tests
// =============

// =============
// Important Lessons
// =============
