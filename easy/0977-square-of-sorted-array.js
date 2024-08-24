// https://leetcode.com/problems/squares-of-a-sorted-array/description/
// First Attempt - Aug 12, 2023
// Second Attempt - Aug 13, 2024

// =============
// Problem
// =============

// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Example 1:
// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

// Example 2:
// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

// Constraints:
// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in non-decreasing order.

// Follow up:
// Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?


// =============
// Solution 1
// =============

// Input: int array, pre-sorted in increasing order (there might be duplicates). could be neg, zero, or pos numbers
// Output: int array, sorted in non-decreasing order (same as above), but each element from the original array has been squared
// Edge-Cases: input not an array? input has non-integers? input has numbers as strings? will input ever be an empty array?

// Method 1: Brute Force - O(nlogn)
// square array
// run sorting algo (merge sort - O(nlogn))
// return the array

// Method 2: Two Pointer - O(n)
// square array
// [-4,-1,0,3,10] -> [16, 1, 0, 9, 100]
// pre-sorted -> first and last will always be the two biggest numbers
// these becomes left and right pointers. (i and length - 1)
// compare left and right, largest element is added to the front array, so that we end up in smallest to largest order
// if (left and right equal eachother, add to array and end.
// return the array

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  //   // Method 1: Brute Force - O(nlogn)
  //   // square array
  //   const squared = nums.map(num => num**2);
  //   let sorted;

  //   // run sorting algo (merge sort - O(nlogn))
  //   sorted = squared.sort( (b,a) => b - a)

  //   // return the array
  //   return sorted

  // Method 2: Two Pointer - O(n)
  // square array
  const squared = nums.map((num) => num ** 2);
  let sorted = [];

  // pre-sorted -> first and last will always be the two biggest numbers
  // these becomes left and right pointers. (i and length - 1)
  // these are our indices
  let i = 0;
  let left = i;
  let right = squared.length - 1;
  for (i = 0; i < squared.length; i++) {
    // compare left and right, largest element is added to the front array, so that we end up in smallest to largest order

    // if left and right equal eachother, add to array and end.
    if (left === right) {
      sorted.unshift(squared[left]);
      break;
    } else if (squared[left] >= squared[right]) {
      // left is bigger, so add to front
      sorted.unshift(squared[left]); // add to front
      left++; // increase left by 1
      continue;
    } else if (squared[left] <= squared[right]) {
      //right is bigger, so add to front
      sorted.unshift(squared[right]); // add to front
      right--;
      continue;
    }
  }

  // return the array
  return sorted;
};


// =============
// Solution 2
// =============

// Inputs: int array, sorted in non-decreasing order. can be neg, zero, positive, or repeat numbers
// Outputs: int array, representing the square of every integer in the original array and still sorted in non-decreasing order.
// Edge-Cases: input will ever not be an integer array? (eg undefined, null, NaN)? Input will ever have less than two integers? input will ever have integers as strings?

// Method 1: Brute Force - O(n logn)
// arr.map(num => num**2).sort((a,b) => a - b)

// Method 2: Two Pointer - O(n)
// start pointers at opposite ends of array
// compare square of each pointer value
// if leftPointer === rightPointer, push(leftVal), break
// if leftVal**2 > rightVal**2, push(leftVal**2), left++, continue
// if leftVal**2 < rightVal**2, push(rightVal**2), right--, continue
// return array.reverse()
// note: push is more efficient O(1) than unshift O(n), so it is faster to push items into array and then reverse it in the end

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  // start pointers at opposite ends of array
  let leftPointer = 0;
  let rightPointer = nums.length - 1;
  let sorted = [];
  
  // compare square of each pointer value
  for (let i = 0; i < nums.length; i++) {
      let leftVal = nums[leftPointer] ** 2;
      let rightVal = nums[rightPointer] ** 2;
    // if leftPointer === rightPointer, push(leftVal), break
    if (leftPointer === rightPointer) {
      sorted.push(leftVal);
      break;
    }
    // if leftVal**2 >= rightVal**2, push(leftVal**2), left++, continue
    else if (leftVal >= rightVal) {
      sorted.push(leftVal);
      leftPointer++;
      continue;
    }
    // if leftVal**2 <= rightVal**2, push(rightVal**2), right--, continue
    else if (leftVal <= rightVal) {
      sorted.push(rightVal);
      rightPointer--;
      continue;
    }
  }
  // return array.reverse()
  return sorted.reverse();

};


// =============
// Tests
// =============

console.log(sortedSquares([-4, -1, 0, 3, 10]), [0, 1, 9, 16, 100]);
console.log(sortedSquares([-7, -3, 2, 3, 11]), [4, 9, 9, 49, 121]);
