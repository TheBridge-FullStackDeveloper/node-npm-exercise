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

function capitalize(str) {
  return _.capitalize(str);
}

function sortByNames(arr) {
  return _.sortBy(arr, "name");
}

function flatArrayAndCalculateMean(arr) {
  return _.mean(_.flatten(arr));
}

function sortByNamesAndCapitalizeFirstLetter(arr) {
  return _.sortBy(arr, "name").map((item) => _.capitalize(item.name));
}

function transformToSnakeCaseAndAllCaps(arr) {
  return arr.map((item) => _.snakeCase(item).toUpperCase());
}

module.exports = {
  sum,
  filterFalsyValues,
  differenceInArrays,
  fillArray,
  calculateMean,
  camelCase,
  capitalize,
  sortByNames,
  flatArrayAndCalculateMean,
  sortByNamesAndCapitalizeFirstLetter,
  transformToSnakeCaseAndAllCaps,
};
