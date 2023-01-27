// EXERCISE 12
// Return an array of all deposits greater than 100
// Array example: bankAccounts in /data/data.js
// getAllDepositsGreaterThanOneHundred(bankAccounts) => [3432, 43242.34, 23432]

export function getAllDepositsGreaterThanOneHundred(array) {
  // Your code goes here...
  let depositsOver100 = [];

  for (let i = 0; i < array.length; i++) {
    let eachDepositArr = array[i].deposits;
    if (eachDepositArr == undefined) {
      eachDepositArr = 0;
    }

    for (let x = 0; x < eachDepositArr.length; x++) {
      if (eachDepositArr[x] > 100) {
        depositsOver100.push(eachDepositArr[x]);
      }
    }
  }
  return depositsOver100;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
