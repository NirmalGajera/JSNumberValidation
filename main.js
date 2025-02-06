const testCases = [
    // Positive Cases
    { input: 0, expected: true },
    { input: 1, expected: true },
    { input: -1, expected: true },
    { input: 1.1, expected: true },
    { input: -1.1, expected: true },
    { input: "0", expected: true },
    { input: "1", expected: true },
    { input: "-1", expected: true },
    { input: "1.1", expected: true },
    { input: "-1.1", expected: true },
    { input: "1234567890", expected: true },
    { input: "-1234567890", expected: true },
    { input: "0.0", expected: true },
    { input: "0x1", expected: true },
    { input: "0x0", expected: true },
    { input: "0xFF", expected: true },
    { input: "0x1a", expected: true },
    { input: "5e2", expected: true },
    { input: "1e-10", expected: true },
    { input: "1E+10", expected: true },
    { input: "3.14e-2", expected: true },
    { input: "2E20", expected: true },
    { input: 3e2, expected: true },
    { input: 1E10, expected: true },
    { input: NaN, expected: false }, // NaN itself is a number, but should not pass as a numeric value
    { input: "NaN", expected: false },
    { input: Infinity, expected: false }, // Infinity and -Infinity should not be considered valid numbers
    { input: -Infinity, expected: false },
    
    // Negative Cases
    { input: true, expected: false },
    { input: false, expected: false },
    { input: "", expected: false },
    { input: "   ", expected: false },
    { input: "abc", expected: false },
    { input: null, expected: false },
    { input: undefined, expected: false },
    { input: [], expected: false },
    { input: {}, expected: false },
    { input: "123abc", expected: false },
    { input: "1.1.1", expected: false },
    { input: "0xG", expected: false }, // Invalid hex
    { input: "0x1.1", expected: false }, // Hexadecimal cannot have decimals
    { input: "1,000", expected: false }, // Commas not allowed
    { input: "-123abc", expected: false },
    { input: "1e", expected: false },
    { input: "1e+", expected: false },
    { input: "+e10", expected: false },
    { input: "e10", expected: false },
    { input: ".", expected: false },
    { input: "1.", expected: false },
    { input: ".1", expected: false },
    { input: "1.1.1", expected: false },
    { input: "0x", expected: false },
    { input: "0x1G", expected: false }, // Invalid hex character
    { input: "1e1.5", expected: false },
    { input: "++1", expected: false },
    { input: "--1", expected: false },
    { input: "+-1", expected: false },

    // Edge Cases
    { input: " +1", expected: false }, // Space before valid number
    { input: "1 ", expected: false }, // Space after valid number
    { input: "\t1", expected: false }, // Tab character before the number

    // More variety
    { input: 0.0000001, expected: true },
    { input: -0.0000001, expected: true },
    { input: "0.0000001", expected: true },
    { input: "0e0", expected: true },
    { input: "1e0", expected: true },
    { input: "1e1", expected: true },
    { input: "-1e1", expected: true },
    { input: "e", expected: false },
    { input: "+", expected: false },
    { input: "-", expected: false },
    { input: "+-10e5", expected: false },
    { input: "3.14e-10", expected: true },
    { input: "-3.14e-10", expected: true },
    { input: "31.4E19", expected: true },
    { input: "-31.4E19", expected: true },
    { input: " 5", expected: false }, // leading space
    { input: "5 ", expected: false }, // trailing space
    { input: "-123.456E12", expected: true },
    { input: "0x123.456", expected: false }, // Invalid hexadecimal
    { input: "0x1p-1", expected: false }, // Hexadecimal pseudo floating-point
    { input: "-1e-1", expected: true },
    { input: "-.5", expected: false }, // leading decimal without zero
    { input: "+12", expected: false }, // '+' should be ignored
    { input: "-0x1", expected: false }, // Negative hex not valid in JS like this

    // JavaScript specific quirks
    { input: String(Number.MAX_SAFE_INTEGER), expected: true },
    { input: String(Number.MIN_SAFE_INTEGER), expected: true },
];

// Function to run and report on test cases
function runTests() {
    testCases.forEach(({ input, expected }, index) => {
        const result = isNumeric(input);
        console.log(`Test #${index + 1}: input = ${JSON.stringify(input)}, expected = ${expected}, got = ${result}`);
        console.assert(result === expected, `Test case #${index + 1} failed`);
    });
}

// Run tests
runTests();
