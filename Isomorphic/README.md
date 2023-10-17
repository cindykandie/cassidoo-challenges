## This week's question:
Given two strings s and t, determine if they are isomorphic. Two strings are isomorphic if there is a one-to-one mapping possible for every character of the first string to every character of the second string.

Example:

> isIsomorphic('abb', 'cdd')
> true // 'a' maps to 'c' and 'b' maps to 'd'

> isIsomorphic('cassidy', '1234567')
> false // 's' cannot have a mapping to both '3' and '4'

> isIsomorphic('cass', '1233')
> true

## Data Structure used
### Maps:
- sToT: This is a Map that stores the mapping from characters in string s to characters in string t. It's used to keep track of the one-to-one mapping from s to t.
- tToS: This is another Map that stores the mapping from characters in string t to characters in string s. It's used to ensure a one-to-one mapping in the opposite direction.