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
  const arrayToString = lodash.toString(arr)
  const snakeCaseArray = lodash.snakeCase([arrayToString]);
  const toUpperCase = lodash.toUpper([snakeCaseArray]);
  return lodash.castArray(toUpperCase);
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
