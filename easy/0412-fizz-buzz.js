// https://leetcode.com/problems/fizz-buzz/
// First Attempt - Nov 17, 2023


// =============
// Problem
// =============

// Given an integer n, return a string array answer(1 - indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i(as a string) if none of the above conditions are true.

// Example 1:
// Input: n = 3
// Output: ["1", "2", "Fizz"]

// Example 2:
// Input: n = 5
// Output: ["1", "2", "Fizz", "4", "Buzz"]

// Example 3:
// Input: n = 15
// Output: ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]

// Constraints:
// 1 <= n <= 104


// =============
// PREP
// =============

// input will be an integer n, greater than 1

// output will be a string array, with each number sequentially from 1 (in string form) to n. 
// // for every number divisible by 3, instead of the number it should be "Fizz"
// // for every number divisible by 5, instead of the number it should be "Buzz"
// // for every number divisible by both 3 and 5, instead of the number it should be "FizzBuzz"


// =============
// Solution 1
// =============

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
	// create empty array
	let arr = []
	// for-loop from i = 1 to i <= n. <= n because we want n inclusive in the array
	for (let i = 1; i <= n; i++) {
		switch (true) {
			case (i % 15 === 0):
				// // if i % 15 === 0, push "FizzBuzz"
				// // // important this occurs before i % 5 === 0 and i % 3 === 0 to avoid multiple conditions being true
				arr.push("FizzBuzz")
				break
			case (i % 3 === 0):
				// // if i % 5 === 0, push "Fizz"
				arr.push("Fizz")
				break
			case (i % 5 === 0):
				// // if i % 3 === 0, push "Buzz"
				arr.push("Buzz")
				break
			default:
				// // else: push String(i)
				arr.push(String(i))
		}
	}
	// return array
	return arr
};