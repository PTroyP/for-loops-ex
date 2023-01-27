// EXERCISE 18
// Please, read the exercise-info/join.md to get the initial data of what is the expected result of this exercise.
// Array example: joinToStringData in /data/data.js
// joinToString(['a', 'b', 'c'], '-') => 'a-b-c'
// NOTE: You can NOT use the array.join(), array.toString(), and array.replace() methods in your code

export function joinToString(array, separator) {
  let iterations = array.length;
  let joinedElements = '';
  let lastElement = '';
  let finishedElements = '';

  for (let x of array) {
    if (!--iterations) {
      lastElement = x;
    } else {
      joinedElements += x + separator;
    }
    finishedElements = joinedElements + lastElement;
  }
  return finishedElements;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
