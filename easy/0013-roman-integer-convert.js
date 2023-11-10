// https://leetcode.com/problems/roman-to-integer/
// First Attempt - Nov 9, 2023


// =============
// Problem
// =============

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II.The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right.However, the numeral for four is not IIII.Instead, the number four is written as IV.Because the one is before the five we subtract it making four.The same principle applies to the number nine, which is written as IX.There are six instances where subtraction is used:

// I can be placed before V(5) and X(10) to make 4 and 9. 
// X can be placed before L(50) and C(100) to make 40 and 90. 
// C can be placed before D(500) and M(1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

//     Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V = 5, III = 3.
// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

// Constraints:

// 1 <= s.length <= 15
// s contains only the characters('I', 'V', 'X', 'L', 'C', 'D', 'M').
// It is guaranteed that s is a valid roman numeral in the range[1, 3999].

// =============
// PREP
// =============

// input will be a string, representing an roman numerals from I, V, X, L, C, D, M. input will always be a valid roman numeral. no other edge cases such as empty string, null, undefined, other funnybusiness. 
// output will be that string converted into an integer. 

// ordered from largest to smallest value. If smaller value appears before larger value, it is larger value minus smaller value. 
// for example, X(10) before L(50) makes 40. 


// =============
// Solution 1
// =============

function romanToInt(roman) {
    // create array from roman numerals, one character per element (split(""))
    let arr = roman.split("")

    // convert characters into integers
    // probably want to make the below a helper function instead for reuse and readability
    arr = arr.map(char => {
        switch (char) {
            case "I": return 1
            case "V": return 5
            case "X": return 10
            case "L": return 50
            case "C": return 100
            case "D": return 500
            case "M": return 1000
        }
    })

    // whenever the current number is smaller than the number after it, subtract instead of add (map to negative)
    arr = arr.map((num, i) => num < arr[i + 1] ? -num : num)

    // sum entire array (reduce)
    let sum = arr.reduce((acc, c) => acc + c, 0)

    // return num
    return sum
}

console.log(romanToInt(`III`), `Expected: 3`) // 1 + 1 + 1
console.log(romanToInt(`LVIII`), `Expected: 58`) // 50 + 5 + 1 + 1 + 1
console.log(romanToInt(`MCMXCIV`), `Expected: 1994`) // 1000 - 100 + 1000 - 10 + 100 - 1 + 5


// =============
// Refactoring 1
// =============

function romanToInt(roman) {
    return roman
        .split("")
        .map(char => {
            switch (char) {
                case "I": return 1
                case "V": return 5
                case "X": return 10
                case "L": return 50
                case "C": return 100
                case "D": return 500
                case "M": return 1000
            }
        })
        .map((num, i, arr) => num < arr[i + 1] ? -num : num)
        .reduce((acc, c) => acc + c, 0)
}