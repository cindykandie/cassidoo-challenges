
### **Interview Question #001**



**The problem:**

**Convert a number in English words to an integer.** You can assume that the number will never go beyond the millions, and there will be no punctuation.

**Examples:**
- `parseNumber("Twelve Thousand Three Hundred Forty Five")` should return `12345`.
- `parseNumber("One Hundred Twenty Three")` should return `123`.

### **Code/Solution Explanation**

**Data Structures Used:**
- `wordsToNumbersMap`: An object mapping English words to their numerical values.
- Arrays and variables to process the input and calculate the numeric result.

**Code Details:**
- The `wordsToNumbersMap` object provides the numerical values for English words.
- The `wordsToNumbers` function converts a text-based number into its numeric representation.
- It splits the input into words, processes each word, and accumulates the numeric value.
- Special handling is provided for multipliers such as "hundred," "thousand," "million," and "billion" to interpret complex numbers.
- Unrecognized words trigger an "Unrecognized word" message.
- The function returns the final numeric result.

**Additional Information:**
- This code is a solution to the interview question, and it's designed to convert textual numbers into actual numeric values, accommodating cases up to millions.
- The question aims to test your problem-solving skills and your ability to work with data structures and algorithms in JavaScript.
- Feel free to expand the `wordsToNumbersMap` with more words or adjust the code to handle additional cases if needed.