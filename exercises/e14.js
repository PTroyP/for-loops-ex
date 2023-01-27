// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  let wrongBalanceAccts = [];
  for (let i = 0; i < array.length; i++) {
    let arrItemDeposits = array[i].deposits;
    if (arrItemDeposits === undefined) {
      arrItemDeposits = 0;
    }

    let sumDeposits = 0;
    for (let x = 0; x < arrItemDeposits.length; x++) {
      sumDeposits += arrItemDeposits[x];
    }

    let arrItemWithdrawal = array[i].withdrawals;
    if (arrItemWithdrawal === undefined) {
      arrItemWithdrawal = 0;
    }
    let sumWithdrawals = 0;
    for (let x = 0; x < arrItemWithdrawal.length; x++) {
      sumWithdrawals += arrItemWithdrawal[x];
    }

    if (sumDeposits - sumWithdrawals !== array[i].balance) {
      wrongBalanceAccts.push(array[i]);
    }
  }
  return wrongBalanceAccts;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
