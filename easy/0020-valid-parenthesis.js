// https://leetcode.com/problems/valid-parentheses/
// First Attempt - Nov 12, 2023


// =============
// Problem
// =============

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.


// =============
// PREP
// =============

// input will be a string consistong of only the following 6 chracters: "(){}[]". The string does not necessarily need to include all of them. no other inputs need to be considered.

// output will be a boolean, which will return true if every open ({[ is closed by its respective ]}) in the correct order. 

// example: {()} should return true. {(}) should return false. 


// =============
// Solution 1
// =============

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    // if s length is odd, just return false and abort the entire function
    if (s.length % 2 === 1) return false

    // create opening bracket array for referencing
    const OPEN = ["(", "{", "["]
    // create closing bracket array for referencing
    const CLOSE = [")", "}", "]"]

    // turn string into array
    let arr = [...s]

    // create empty array called current
    let current = []

    // loop through array
    for (let i = 0; i < arr.length; i++) {
        console.log(`\nCurrent Index: ${i}`)
        console.log(`Current Element to Check: ${arr[i]}`)

        // if element is any open brackets (doesn't matter if current is empty or not)
        if (OPEN.includes(arr[i])) {
            // push to current, continue  
            current.push(arr[i])
            console.log(`Current: ${current}`)
        } else if (CLOSE.includes(arr[i]) && current.length === 0) {
            // if element is any of close brackets && current is empty, return false
            console.log(`Encountered closing bracket without an opening bracket in current`)
            return false
        } else if (CLOSE.includes(arr[i]) && current.length !== 0) {
            console.log(`Time to evaluate the opening brackets in current`)
            // if element is any of close brackets && current is not empty
            // check if last element of current is the corresponding opening bracket of this closing bracket
            switch (arr[i]) {
                case ")":
                    // if true, pop last bracket from current
                    if (current[current.length - 1] === "(") {
                        console.log(`Last Element in Current was "("`)
                        current.pop()
                        break
                    } else {
                        // if false, return false
                        return false
                    }
                case "}":
                    if (current[current.length - 1] === "{") {
                        console.log(`Last Element in Current was "{"`)
                        current.pop()
                        break
                    } else {
                        return false
                    }
                case "]":
                    if (current[current.length - 1] === "[") {
                        console.log(`Last Element in Current was "["`)
                        current.pop()
                        break

                    } else {
                        return false
                    }
                default:
                    console.log(`Ran Default`)
                    return false
            }
        }
    }

    // if current is empty, we successfully looped through the string. return true

    console.log(`Ran through string without issue`)
    return current.length === 0
};


// =============
// Refactoring 1
// =============

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length % 2 === 1) return false

    const OPEN = ["(", "{", "["]
    const CLOSE = [")", "}", "]"]

    let arr = [...s]
    let current = []

    for (let i = 0; i < arr.length; i++) {
        if (OPEN.includes(arr[i])) {
            current.push(arr[i])
        } else if (CLOSE.includes(arr[i])) {
            if (current.length === 0) {
                return false
            }
            if (current.length !== 0) {
                if ((arr[i] === ")" && current[current.length - 1] === "(") ||
                    (arr[i] === "}" && current[current.length - 1] === "{") ||
                    (arr[i] === "]" && current[current.length - 1] === "[")) {
                    current.pop()
                    continue
                }
                return false
            }
        }
    }
    return current.length === 0
}


// =============
// Tests
// =============

console.log(isValid("()"), `Expected: true`)
console.log(isValid("[]"), `Expected: true`)
console.log(isValid("{}"), `Expected: true`)
console.log(isValid("()()()()"), `Expected: true`)
console.log(isValid("[]()[]"), `Expected: true`)
console.log(isValid("{}{}()"), `Expected: true`)
console.log(isValue("({[]})"), `Expected: true`)

console.log(isValue(")("), `Expected: false`)
console.log(isValue(")(}{"), `Expected: false`)
console.log(isValue("{(})"), `Expected: false`)
