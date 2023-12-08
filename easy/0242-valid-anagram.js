// https://leetcode.com/problems/valid-anagram/
// First Attempt - Dec 7, 2023


// =============
// Problem
// =============

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

// Constraints:
// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?


// =============
// PREP
// =============

// input will be two string variables. inputs will all be lowercase. inputs may be as large as 50,000 in length. inputs are not necessarily dictionary words

// any edge cases? 
// will inputs ever be anything not a string? 
// if input is two empty strings, should it return true?
// will input ever have non alphabetical characters such as numbers?


// output will be a boolean, with true representing if the words are anagrams (ie, same characters but different order)


// =============
// Solution 1
// =============

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
	// time, space complexity is important as string lengths can get incredibly large. 
	// test if strings are even same length?
	if (s.length !== t.length) return false

	// one method could be to sort both strings and compare if they are exactly equal
	// split string into array and vanilla sort
	return s.split("").sort().join("") === t.split("").sort().join("")

};

console.log(isAnagram("anagram", "nagaram"), true)
console.log(isAnagram("rat", "car"), false)
