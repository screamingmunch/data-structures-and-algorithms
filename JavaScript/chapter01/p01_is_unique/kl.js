// Is Unique: Implement an algorithm to determine if a string has all unique characters.
// What if you cannot used additional data structures?

const assert = require("assert");

/**
 * Checks if a string is composed of all unique characters
 * @param  {string} str input string to check
 * @return {bool}       Whether the input string contains unique characters
 *
 * We iterate through the input str of length N. Operations within this loop are O(1), so no additional time added.
 * We create an additional data structure, `set` where in the worst case is the same size as the input str, N.
 *
 * Runtime: O(N)
 * Space:   O(N)
 *
 */
// with additional data structures
const isUnique1 = (str) => {
  let temp = new Set();
  arr = str.split('');
  for(let i=0; i<arr.length; i++){
    if(!temp.has(arr[i])) {
      temp.add(arr[i]);
    } else {
      return false;
    }
  }
  return true;
};

// console.log(isUnique1("tech"));
// console.log(isUnique1("techqueria"));

/**
 * Checks if a string is composed of all unique characters
 * @param  {string} str input string to check
 * @return {bool}       Whether the input string contains unique characters
 *
 * We iterate through the input str of length N. Within that, we iterate through the rest of the str of length N-1.
 * Within the nested for loop, we only perform an O(1) operation. This leads to O(N^2) for the runtime complexity.
 * In this implementation, we do not create any additional data structures, so we use constant space.
 *
 * Runtime: O(N^2)
 * Space:   O(1)
 */
// without additional data structures
const isUnique2 = (str) => {

};

describe(module.filename, () => {
  it("should return true on an input string with unique characters", () => {
    assert.equal(isUnique1("tech"), true);
    // assert.equal(isUnique2("tech"), true);
  });
  it("should return false on an input string with non-unique characters", () => {
    assert.equal(isUnique1("techqueria"), false);
    // assert.equal(isUnique2("techqueria"), false);
  });
});
