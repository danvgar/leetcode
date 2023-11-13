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
    console.log(`\nInput: ${strs}`)
    // if strs array only has one word in it, return that word
    if (strs.length === 1 || strs[0] === "") return strs[0]

    // we don't need to compare every word of an array, just the last two of a sorted array
    // vanilla sort will sort the array by UTF-16 code units
    strs.sort()
    console.log(`Sorted Input: ${strs}`)

    // the minimum effort we need to put in is the smallest word in the array
    // arguable the below could be optimized to consider only the first and last element of our sorted array
    let minlength = Math.min(...strs.map(word => word.length))
    console.log(`minlength: ${minlength}`)

    // our starting prefix is an empty string -> if there is no common prefix, we are returning an empty string
    let prefix = ""

    for (let i = 0; i < minlength; i++) {
        console.log(`\nCurrent Prefix Tested at Index ${i}: "${strs[0][i]}"`)
        console.log(`Comparing ${strs[0][i]} with ${strs[strs.length - 1][i]}`)
        // does first character of first word === first character of last word? 
        if (strs[0][i] === strs[strs.length - 1][i]) {
            console.log(`Characters at ${i} match.`)
            // if yes, add it to the prefix. then we move on and test the next character
            prefix += strs[0][i]
            console.log(`New Prefix: ${prefix}`)
        } else {
            // if we ever hit a point where the characters do not match, we stop and we return the prefix
            console.log(`Characters don't match.`)
            console.log(`Final return: "${prefix}"`)
            return prefix
        }
    }
    // if you get to the end of the loop and the shortest word is actually the entire prefix, return the prefix
    return prefix
}

// =============
// Refactoring 1
// =============

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 1 || strs[0] === "") return strs[0]
    strs.sort()
    let minlength = Math.min(...strs.map(word => word.length))
    let prefix = ""
    for (let i = 0; i < minlength; i++) {
        if (strs[0][i] === strs[strs.length - 1][i]) {
            prefix += strs[0][i]
        } else {
            return prefix
        }
    }
    return prefix
}


// =============
// Tests
// =============


console.log(longestCommonPrefix(["flower", "flow", "flight"], `Expected: "fl"`))
console.log(longestCommonPrefix(["dog", "racecar", "car"], `Expected: ""`))
console.log(longestCommonPrefix(["a"], `Expected: "a"`))

