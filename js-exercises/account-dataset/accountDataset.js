const path = require("path");
const fs = require("fs");

const fileContent = fs.readFileSync(
  path.join(__dirname, "dataset.json"),
  "utf-8"
);

const { bankBalances } = JSON.parse(fileContent);

function hundredThousandairs() {}

function datasetWithRoundedDollar() {}

function sumOfBankBalances() {}

function sumOfInterests() {}

function higherStateSums() {}

export {
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances,
  sumOfInterests,
  higherStateSums
};
