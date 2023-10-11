// A mapping of words to their numerical values
const wordsToNumbersMap = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90,
    hundred: 100,
    thousand: 1000,
    million: 1000000,
    billion: 1000000000,
  };
  
  // function to convert words to numbers
  function wordsToNumbers(input) {
  // Converts the input string to lowercase and split it into an array of words
    const words = input.toLowerCase().split(/\s+/);
  
  // Initialize variables for the result and the current number being processed
    let result = 0;
    let currentNumber = 0;
  
  // Iterate through each word in the array
    for (let word of words) {
  // Check if the word exists in the wordsToNumbersMap
      const number = wordsToNumbersMap[word];
  
  // If the word is in the map
      if (number !== undefined) {
   // Handle "hundred" as a multiplier for the previous number
        if (number === 100) {
          currentNumber *= number;
        }
   // Handle larger multipliers like "thousand," "million," or "billion"
        else if (number >= 1000) {
          currentNumber *= number;
          result += currentNumber;
          currentNumber = 0;
        }
   // Add regular numbers to the current number
        else {
          currentNumber += number;
        }
      }
   // If the word is not recognized, print a message
      else {
        console.log(`Unrecognized word: ${word}`);
      }
    }
  
    // Add the final currentNumber to the result
    result += currentNumber;
  
    // Return the numerical result
    return result;
  }
  
  // Test the function with sample inputs
  const input1 = "seven";
  const input2 = "Twelve Thousand Three Hundred Forty Five";
  const input3 = "one million and eighty eight";
  
  
  console.log(`${input1} - ${wordsToNumbers(input1)}`);
  console.log(`${input2} - ${wordsToNumbers(input2)}`);
  console.log(`${input3} - ${wordsToNumbers(input3)}`);