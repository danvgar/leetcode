// https://leetcode.com/problems/merge-strings-alternately/description/
// First Attempt - Oct 19, 2024


// =============
// Problem
// =============

// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

// Example 1:
// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r

// Example 2:
// Input: word1 = "ab", word2 = "pqrs"
// Output: "apbqrs"
// Explanation: Notice that as word2 is longer, "rs" is appended to the end.
// word1:  a   b 
// word2:    p   q   r   s
// merged: a p b q   r   s

// Example 3:
// Input: word1 = "abcd", word2 = "pq"
// Output: "apbqcd"
// Explanation: Notice that as word1 is longer, "cd" is appended to the end.
// word1:  a   b   c   d
// word2:    p   q 
// merged: a p b q c   d

// Constraints:
// 1 <= word1.length, word2.length <= 100
// word1 and word2 consist of lowercase English letters.


// =============
// Attempt 1
// =============

// Time: Beats 67.90%
// Memory: Beats 88.43%

// __Inputs: 
// two strings

// __Edge-cases:
// inputs will only be lowercase letters

// __Outputs: 
// string -> each character of each input string alternating, starting with first character of word1
// if one word is longer than other, add remaining letters to string

// function mergeAlternately(word1: string, word2: string): string {
//     // let merged = []
//     // Iterate through word1
//     // if !word1[i], push splice of word2 from i to word2.length, break out of loop
//     // else: Push word1[i] to merged
//     // if !word2[i], push splice of word1 from i to word1.length, break out of loop
//     // else: Push word2[i] to merged
//     // i++
//     let merged: string[] = []
//     const longest: number = Math.max(word1.length, word2.length);
//     for (let i = 0; i < longest; i++) {
//         if (word1[i] && word2[i]) {
//             merged.push(word1[i]);
//             merged.push(word2[i]);
//         } else if (!word1[i] && word2[i]) {
//             merged.push(word2.slice(i, word2.length));
//             break;
//         } else if(word1[i] && !word2[i]) {
//             merged.push(word1.slice(i, word1.length));
//             break;
//         }
//     }
//     return merged.join("")
// };

// __Tests:
console.log(mergeAlternately("abc", "pqr"), "apbqcr");
console.log(mergeAlternately("ab", "pqrs"), "apbqrs");
console.log(mergeAlternately("abcd", "pq"), "apbqcd");


// =============
// Attempt 2
// =============
// Changed push to unshift + reverse

// Time: Beats 37.10%
// Memory: Beats 72.20%

// __Inputs: 
// two strings

// __Edge-cases:
// inputs will only be lowercase letters

// __Outputs: 
// string -> each character of each input string alternating, starting with first character of word1
// if one word is longer than other, add remaining letters to string

function mergeAlternately(word1: string, word2: string): string {
    // let merged = []
    // Iterate through word1
    // if !word1[i], push splice of word2 from i to word2.length, break out of loop
    // else: Push word1[i] to merged
    // if !word2[i], push splice of word1 from i to word1.length, break out of loop
    // else: Push word2[i] to merged
    // i++
    let merged: string[] = []
    const longest: number = Math.max(word1.length, word2.length);
    for (let i = 0; i < longest; i++) {
        if (word1[i] && word2[i]) {
            merged.unshift(word1[i]);
            merged.unshift(word2[i]);
        } else if (!word1[i] && word2[i]) {
            merged.unshift(word2.slice(i, word2.length));
            break;
        } else if(word1[i] && !word2[i]) {
            merged.unshift(word1.slice(i, word1.length));
            break;
        }
    }
    return merged.reverse().join("")
};

// __Tests:
console.log(mergeAlternately("abc", "pqr"), "apbqcr");
console.log(mergeAlternately("ab", "pqrs"), "apbqrs");
console.log(mergeAlternately("abcd", "pq"), "apbqcd");