// https://leetcode.com/problems/longest-common-prefix/
// First Attempt - Nov 11, 2023


// =============
// Problem
// =============

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".


// Example 1:

// Input: strs = ["flower", "flow", "flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog", "racecar", "car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.


// =============
// PREP
// =============

// input will be an array of strings. no need to consider any other types of input scenarios. input will only cosist of lowercase english letters.
// output will be a string, which represents the longest common prefix of each string in the input array 


// =============
// Solution 1
// =============

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    strs.sort()

    if(strs.length === 1) return strs[0]

    let minlength = strs[0].length
    for (let i = 0; i < minlength - 1; i++) {
        if (strs[0][i] !== strs[strs.length - 1][i]) {
            return strs[0].slice(0,i)
        }
    }
    return ""
};

// almost there. need to revisit.

console.log(longestCommonPrefix(["flower", "flow", "flight"], `Expected: "fl"`))
console.log(longestCommonPrefix(["dog", "racecar", "car"], `Expected: ""`))
console.log(longestCommonPrefix(["a"], `Expected: "a"`))

