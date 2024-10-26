// https://leetcode.com/problems/jewels-and-stones/description/
// First Attempt - Oct 25, 2024

// =============
// Problem
// =============

// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:
// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3

// Example 2:
// Input: jewels = "z", stones = "ZZ"
// Output: 0

// Constraints:
// 1 <= jewels.length, stones.length <= 50
// jewels and stones consist of only English letters.
// All the characters of jewels are unique.

// /**
//  * @param {string} jewels
//  * @param {string} stones
//  * @return {number}
//  */
// var numJewelsInStones = function(jewels, stones) {

// };

// =============
// Solution 1
// =============

// Time: Beats 48.02%
// Space: Beats 6.25%

// Inputs: 2 params -
// jewels: string -> case-sensitive letters.
// stones: string -> case-sensitive letters

// Outputs: integer -> number of times a character from "jewels" appears in "stones"

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  // Create map of characters that are considered jewels, with char : bool pairs
  // iterate through stones, and if map.has(stone), increase count by one
  // return count

  const map = {};
  let count = 0;

  for (const jewel of jewels) {
    if (!map[jewel]) {
      map[jewel] = true;
    }
  }
  console.log("Map: ", map);

  for (const stone of stones) {
    console.log("map[stone]?: ", map[stone])
    if (map[stone]) {
      count++;
    }
  }

  return count;
};


// =============
// Solution 2
// =============

// Time: Beats 100.0%
// Space: Beats 73.42%

// Inputs: 2 params -
// jewels: string -> case-sensitive letters.
// stones: string -> case-sensitive letters

// Outputs: integer -> number of times a character from "jewels" appears in "stones"

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  // let count = 0;
  // iterate through stones
  // if jewels includes char in stones, count ++
  // return count

  let count = 0;

  for(let char of stones) {
    if(jewels.includes(char)) {
      count++;
    }
  }

  return count;
};

// =============
// Tests
// =============

console.log((numJewelsInStones("aA", "aAAbbbb"), 3));
console.log((numJewelsInStones("z", "ZZ"), 0));

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3

// Example 2:
// Input: jewels = "z", stones = "ZZ"
