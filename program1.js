






/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // Map of closing to opening brackets
    const bracketMap = { ')': '(', '}': '{', ']': '[' };
    const stack = [];

    // Iterate through each character in the string
    for (const char of s) {
        // If it's a closing bracket
        if (bracketMap[char]) {
            // Pop the topmost element from the stack
            const topElement = stack.pop();

            // Check if the popped element matches the corresponding opening bracket
            if (topElement !== bracketMap[char]) {
                return false;
            }
        } else {
            // It's an opening bracket, push it onto the stack
            stack.push(char);
        }
    }

    // If the stack is empty, all brackets are matched properly
    return stack.length === 0;
}

// Example usage:
console.log(isValid("()"));        // Output: true
console.log(isValid("()[]{}"));    // Output: true
console.log(isValid("(]"));        // Output: false
console.log(isValid("{[()]}"));    // Output: true
console.log(isValid("([)]"));      // Output: false
console.log(isValid(""));          // Output: true
console.log(isValid("(){"));       // Output: false

// Export the function for testing
module.exports = { isValid };

// Test Cases
const assert = require("assert");

describe("test cases for problem 1", function () {
    it("test case 1", function () {
        const result = isValid("()");
        assert.equal(true, result);
    });

    it("test case 2", function () {
        const result = isValid("()[]{}");
        assert.equal(true, result);
    });

    it("test case 3", function () {
        const result = isValid("{[()]}");
        assert.equal(true, result);
    });

    it("test case 4", function () {
        const result = isValid("(]");
        assert.equal(false, result);
    });

    it("test case 5", function () {
        const result = isValid("([)]");
        assert.equal(false, result);
    });

    it("test case 6", function () {
        const result = isValid("");
        assert.equal(true, result);
    });

    it("test case 7", function () {
        const result = isValid("(){");
        assert.equal(false, result);
    });
});










