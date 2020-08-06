// Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome. A
// palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters.
// The palindrome does not need to be limited to just dictionary words.

const assert = require("assert");

/**
 * Checks if the input string can be rearranged into a palindrome
 * @param  {string} str input string to check against
 * @return {boolean}    whether the input string can be rearranged into a palindrome
 *
 * We don't actually have to rearrange the string to solve this problem; we only need to check its contents.
 * If the string is of odd  length, then each character in the string has to appear an even number of times, except one.
 * If the string is of even length, then each character in the string has to appear an even number of times.
 * We can create a letter frequency map which takes O(N) time to loop through the string, and O(N) space to build.
 * Looping through the object key-value pairs again is an O(N) operation in the worst case where we loop through it all.
 *
 * Runtime: O(N)
 * Space:   O(N)
 *
 */
const palindromePerm = (str) => {

  // if str is even --> all elements need to occur even amount of times
  // if str is odd  --> all elements except one need to occur even amount of times
  // ignore spaces

  str = str.split(' ').join('');
  // str = str.replace(/\s+/g, '');

  const charCount = {};
  let oddCountInstance = 0;
  for (const char of str) {
      charCount[char.toLowerCase()] = (charCount[char.toLowerCase()] || 0) +1;
  }

  console.log(charCount);
  
  for (const key in charCount) {
    
    // even case
    if(isEven(str.length)) {
      if( !isEven(charCount[key]) ) return false;
    } else {
      // odd case
      if( !isEven(charCount[key])) {
        oddCountInstance++;
      }
    }
  }

  if(!isEven(str.length) && oddCountInstance>1) return false;

  return true;

};

const isEven = (num) => {
  if(num%2 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(palindromePerm('techqueria'));
console.log(palindromePerm('Tact C o  a     '));

describe(module.filename, () => {
  it("should return true when the input string can be rearranged in the form of a palindrome.", () => {
    assert.ok(palindromePerm("Tact C o  a     "));
    assert.ok(palindromePerm("RaCeCaR"));
  });
  it("should return false when the input string cannot be rearranged in the form of a palindrome.", () => {
    assert.ok(!palindromePerm("techqueria"));
  });
});
