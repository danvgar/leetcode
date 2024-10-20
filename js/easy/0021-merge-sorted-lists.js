// https://leetcode.com/problems/merge-two-sorted-lists/
// First Attempt - Nov 13, 2023


// =============
// Problem
// =============

// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Example 1:
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:
// Input: list1 = [], list2 = []
// Output: []

// Example 3:
// Input: list1 = [], list2 = [0]
// Output: [0]

// Constraints:
// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.


// =============
// PREP
// =============

// input will be two integer arrays, both already sorted from least to greatest value.
// edge cases? other data types to consider?
// either list may be empty. two empty arrays should return an empty array. one empty array should just return the non-empty array. 

// output will be a single array, with each element from the two arrays included in sorted order. 
// if two elements are the same, no need to consider which one comes first in the array. 

// function cannot just concatenate both lists and re-sort them?


// =============
// Solution 1
// =============

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
// option 1: concatenate and re-sort. 
// option 2: brute force: compare each integer one at a time and add to next index. 

};

// need to revisit

// =============
// Tests
// =============

console.log(mergeTwoLists([1, 3, 5], [2, 4, 6]), `Expected: [1, 2, 3, 4, 5, 6]`)
console.log(mergeTwoLists([1, 1, 3], [2, 2, 4]), `Expected: [1, 1, 2, 2, 3, 4]`)
