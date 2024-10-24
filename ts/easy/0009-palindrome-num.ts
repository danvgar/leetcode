// https://leetcode.com/problems/palindrome-number/
// First Attempt - Oct 24, 2024

// =============
// Problem
// =============

// Given an integer x, return true if x is a
// palindrome, and false otherwise.

// Example 1:
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Example 2:
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads - 121. From right to left, it becomes 121 -.Therefore it is not a palindrome.

// Example 3:
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left.Therefore it is not a palindrome.

// Constraints:
// -2^31 <= x <= 2^31 - 1

// Follow up: Could you solve it without converting the integer to a string ?

// function isPalindrome(x: number): boolean {

// };

// =============
// Attempt 1
// =============

// Time: Beats 93.67%
// Space: Beats 17.69%

// input: integer (neg, zero, positive) 
// output: boolean -> true if number is same backwards 
//  - negative numbers cannot be palindrome due to negative sign 



function isPalindrome(x: number): boolean {
    // negative numbers always return false
    // convert number to string, then split into array
    // two pointer, start and end - O(n)
    // if leftVal !== rightVal, return false
    // else leftVal++, rightVal--, 
    // default: return true
    if (x < 0) return false

    const num: string[] = x.toString().split("");

    let [left, right] = [0, num.length - 1];

    while (left < right) {
        if (num[left] !== num[right]) return false;
        left++;
        right--;
    }
    return true
};

console.log(isPalindrome(121), true);
console.log(isPalindrome(-121), false);
console.log(isPalindrome(10), false);
console.log(isPalindrome(0), true);


// =============
// Lessons Learned
// =============

// Two-Pointer approach
// Using a while loop because we don't know how long it will take. 
// Using "left !== right" for while loop can break if integer is 11, because left and right pass by each other. Better to say "left < right" – as long as left is smaller than right and we've seen no flags that we should return false. 
// You actually don't need to convert the string into an array here, and it will save you some efficiency