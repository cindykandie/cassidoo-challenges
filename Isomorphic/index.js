// Function to check if two strings are isomorphic
function isIsomorphic(s, t) {
    // Check if the lengths of the input strings are different
    if (s.length !== t.length) {
      return false; // If different, they can't be isomorphic.
    }
  
    // Create two maps to store character mappings
    const sToT = new Map();
    const tToS = new Map();
  
    // Loop through the characters of both strings
    for (let i = 0; i < s.length; i++) {
      const charS = s[i];
      const charT = t[i];
  
      // Check if the character in s maps to the same character in t
      if (
        (sToT.has(charS) && sToT.get(charS) !== charT) || // Check for s to t mapping conflict
        (tToS.has(charT) && tToS.get(charT) !== charS)    // Check for t to s mapping conflict
      ) {
        return false; // Conflicting mapping, so they are not isomorphic
      }
  
      // Establish the mapping in both directions
      sToT.set(charS, charT); // Mapping from s to t
      tToS.set(charT, charS); // Mapping from t to s
    }
  
    return true; // If no conflicts, the strings are isomorphic
  }
  
  // Test cases
  console.log(isIsomorphic('abb', 'cdd')); // true
  console.log(isIsomorphic('cassidy', '1234567')); // false
  console.log(isIsomorphic('cass', '1233')); // true
  