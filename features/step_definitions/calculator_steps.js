const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let numbers = [];
let calculatorResult = 0;

Given('I have entered {int} into the calculator', function (number) {
  numbers.push(number);
});

When('I press add', function () {
  calculatorResult = numbers.reduce((sum, current) => sum + current, 0);
  // Clear the numbers array for next scenario
  numbers = [];
});

Then('the result should be {int} on the screen', function (expectedResult) {
  assert.strictEqual(calculatorResult, expectedResult);
});
