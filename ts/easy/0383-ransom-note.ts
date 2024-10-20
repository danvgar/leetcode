// https://leetcode.com/problems/ransom-note/description/
// First Attempt - Oct 17, 2024


// =============
// Problem
// =============

// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

// Example 1:
// Input: ransomNote = "a", magazine = "b"
// Output: false

// Example 2:
// Input: ransomNote = "aa", magazine = "ab"
// Output: false

// Example 3:
// Input: ransomNote = "aa", magazine = "aab"
// Output: true
 
// Constraints:
// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English letters.


// =============
// Attempt 1
// =============

// __Output:
// ransomNote can be constructed with letters from magazine

function canConstruct(ransomNote: string, magazine: string): boolean {
    // Create map of magazine, with character-count pairs. This is our inventory
    // Iterate through ransomnote, and check if map has it
        // If map doesn't contain character OR count of character is zero - return false
        // Else If map contains character, count-- and continue to next

    const map = new Map<string, number>();

    for(const char of magazine) { //O(n)
        map[char] = (map[char] || 0) + 1
    }

    for(const char of ransomNote) {
        if(map[char] > 0) {
            map[char]--
        }
        else {
            return false
        }
    }

    return true;
};