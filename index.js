const _ = require('lodash');

function sum(a, b) {
  return _.add(a, b);
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
  return _.sortBy(arr, 'name');
}

function flatArrayAndCalculateMean(arr) {
  const flatArr = _.flatten(arr);
  return _.mean(flatArr);
  
}

function sortByNamesAndCapitalizeFirstLetter(arr) {
  
  const sortedArr = _.sortBy(arr, 'name');
  const capitalizedNames = sortedArr.map(item => _.capitalize(item.name));

  return capitalizedNames;
}

function transformToSnakeCaseAndAllCaps(arr) {
  return arr.map(item => _.toUpper(_.snakeCase(item)));
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
