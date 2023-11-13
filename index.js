const lodash = require("lodash");

function sum(a, b) {
  return lodash.add(a, b);
}

function filterFalsyValues(arr) {
  return lodash.compact(arr);
}

function differenceInArrays(firstArray, secondArray) {
  return lodash.difference(firstArray, secondArray);
}

function fillArray(arr, value) {
  return lodash.fill(arr, value);
}

function calculateMean(arr) {
  return lodash.mean(arr);
}

function camelCase(str) {
  return lodash.camelCase([str]);
}

function capitalize(str) {
  return lodash.capitalize([str]);
}

function sortByNames(arr) {
  return lodash.sortBy(arr, ["name"]);
}

function flatArrayAndCalculateMean(arr) {
  const flattenArray = lodash.flatten(arr);
  return lodash.mean(flattenArray);
}

function sortByNamesAndCapitalizeFirstLetter(arr) {
  const mapArray = lodash.map(arr, "name");
  const sortedArray = lodash.sortBy(mapArray);
  return lodash.map(sortedArray, lodash.capitalize);
}

function transformToSnakeCaseAndAllCaps(arr) {
  // Use the snakeCase() function from lodash to convert the string to snake_case
  // Use the toUpper() function from lodash to convert the string to uppercase
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
