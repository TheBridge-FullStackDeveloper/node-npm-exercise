const _ = require("lodash");

function sum(a, b) {
  return a + b;
}

function filterFalsyValues(arr) {
  return _.compact(arr);
}

function differenceInArrays(firstArray, secondArray) {
  return _.difference(firstArray, secondArray);
}

function fillArray(arr, value) {
  return _.fill(arr, value);
}

function calculateMean(arr) {
  return _.mean(arr);
}

function camelCase(str) {
  return _.camelCase(str);
}

module.exports = {
  sum,
  filterFalsyValues,
  differenceInArrays,
  fillArray,
  calculateMean,
  camelCase,
};
