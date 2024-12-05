// https://leetcode.com/problems/baseball-game/description/
// First Attempt - Dec 4, 2024

// =============
// Problem
// =============

// You are keeping the scores for a baseball game with strange rules. At the beginning of the game, you start with an empty record.

// You are given a list of strings operations, where operations[i] is the ith operation you must apply to the record and is one of the following:

// An integer x.
// Record a new score of x.

// '+'.
// Record a new score that is the sum of the previous two scores.

// 'D'.
// Record a new score that is the double of the previous score.

// 'C'.
// Invalidate the previous score, removing it from the record.

// Return the sum of all the scores on the record after applying all the operations.

// The test cases are generated such that the answer and all intermediate calculations fit in a 32-bit integer and that all operations are valid.

// Example 1:
// Input: ops = ["5","2","C","D","+"]
// Output: 30
// Explanation:
// "5" - Add 5 to the record, record is now [5].
// "2" - Add 2 to the record, record is now [5, 2].
// "C" - Invalidate and remove the previous score, record is now [5].
// "D" - Add 2 * 5 = 10 to the record, record is now [5, 10].
// "+" - Add 5 + 10 = 15 to the record, record is now [5, 10, 15].
// The total sum is 5 + 10 + 15 = 30.

// Example 2:
// Input: ops = ["5","-2","4","C","D","9","+","+"]
// Output: 27
// Explanation:
// "5" - Add 5 to the record, record is now [5].
// "-2" - Add -2 to the record, record is now [5, -2].
// "4" - Add 4 to the record, record is now [5, -2, 4].
// "C" - Invalidate and remove the previous score, record is now [5, -2].
// "D" - Add 2 * -2 = -4 to the record, record is now [5, -2, -4].
// "9" - Add 9 to the record, record is now [5, -2, -4, 9].
// "+" - Add -4 + 9 = 5 to the record, record is now [5, -2, -4, 9, 5].
// "+" - Add 9 + 5 = 14 to the record, record is now [5, -2, -4, 9, 5, 14].
// The total sum is 5 + -2 + -4 + 9 + 5 + 14 = 27.

// Example 3:
// Input: ops = ["1","C"]
// Output: 0
// Explanation:
// "1" - Add 1 to the record, record is now [1].
// "C" - Invalidate and remove the previous score, record is now [].
// Since the record is empty, the total sum is 0.

// /**
//  * @param {string[]} operations
//  * @return {number}
//  */
// var calPoints = function(operations) {

// };

// =============
// Solution 1
// =============

// Beats Time: 100.00%
// Beats Space: 69.63%

// Inputs: string[] of operations
// Edge Cases: Will there be any invalid operations? Will we ever encounter errors due to the operation order?
// Outputs: sum of scores after following the operations in the array

/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  // create empty score array (stack)
  // loop through operations array
  // if "+", push current score and previous score
  // if "D", push currentscore * 2
  // if Number.isInteger(current score), push currentscore
  // else "error"
  // return scores sum
  let scores = [];

  for (let i = 0; i < operations.length; i++) {
    let currentOp = operations[i];
    let currentScore, previousScore;
    if (currentOp === "+") {
      currentScore = scores[scores.length - 1];
      previousScore = scores[scores.length - 2];
      scores.push(currentScore + previousScore);
    } else if (currentOp === "D") {
      currentScore = scores[scores.length - 1];
      scores.push(currentScore * 2);
    } else if (currentOp === "C") {
      scores.pop();
    } else {
      scores.push(parseInt(currentOp));
    }
  }
  if (scores.length === 0) return 0;

  let finalScore = scores.reduce((acc, c) => acc + c, 0);
  return finalScore;
};

// =============
// Tests
// =============

console.log(calPoints(["5", "2", "C", "D", "+"]), "Expected: 30");
console.log(
  calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]),
  "Expected: 27"
);
console.log(calPoints(["1", "C"]), "Expected: 0");
