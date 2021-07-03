// Solution not completed ... WIP
const path = require("path");
const fs = require("fs");

const fileContent = fs.readFileSync(
  path.join(__dirname, "dataset.json"),
  "utf-8"
);

const { bankBalances } = JSON.parse(fileContent);

function hundredThousandairs() {
  const minimumAmountTobePresent = 100000;
  return bankBalances.filter((account) => account.amount > minimumAmountTobePresent);
}

function datasetWithRoundedDollar() {

}

function sumOfBankBalances() {
  const sumOfAccountsBalance = bankBalances.reduce((accumulator, account) => (accumulator + parseFloat(account.amount)), 0);
  return Math.round(sumOfAccountsBalance * 100) / 100;
}

function sumOfInterests() { }

function higherStateSums() { }

export {
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances,
  sumOfInterests,
  higherStateSums
};
