// Helper fun checking if a string is a palindrome.
const isStrPalindrome = (str) => {
    let leftIdx = 0, rightIdx = str.length - 1;

    // Use two pointers to compare characters from both ends.
    while (leftIdx < rightIdx) {
        // A mismatch found, it's not a palindrome.
        if (str[leftIdx] !== str[rightIdx]) return false;
        ++leftIdx, --rightIdx; // Move pointers inward.
    }

    return true; // If no mismatches, it's a palindrome.
};

var partition = function(s) {
    const curSubsetArr = [], subsetsArr = [];  

    const findSubsets = (idx, currStr) => {
        // If the index reaches the end of the string, store the current partition.
        if (idx === s.length) return subsetsArr.push([...curSubsetArr]);

        // Append the current character to the substring being built.
        let nextStr = currStr + s[idx];

        // If the current substring is a palindrome:
        if (isStrPalindrome(nextStr)) {
            curSubsetArr.push(nextStr);      // Add the palindrome to the current partition.
            findSubsets(idx + 1, "");       // Recursively process the next part of the string.
            curSubsetArr.pop();             // Backtrack: remove the last palindrome from the partition.
        }

        // Option to continue building the current substring without splitting.
        if (idx + 1 < s.length) findSubsets(idx + 1, nextStr);
    };

    // Start the recursion from index 0 with an empty substring.
    findSubsets(0, "");

    return subsetsArr; 
};