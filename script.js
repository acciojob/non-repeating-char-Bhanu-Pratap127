function firstNonRepeatedChar(str) {
   const charCount = {};

    // Count the occurrences of each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the first character with a count of 1
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null; // Return null if no non-repeating character is found
}
}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 
