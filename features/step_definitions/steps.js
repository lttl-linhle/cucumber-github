const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let greeting = '';
let target = '';
let response = '';

Given('I have a greeting {string}', function (givenGreeting) {
  greeting = givenGreeting;
});

When('I say it to {string}', function (givenTarget) {
  target = givenTarget;
  response = `${greeting} ${target}!`;
});

Then('I should hear {string}', function (expectedResponse) {
  assert.strictEqual(response, expectedResponse);
});
