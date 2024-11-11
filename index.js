const lodash = require("lodash")

function sum(a, b) {
  return lodash.add(a, b)
}

function filterFalsyValues(arr) {
  return lodash.compact(arr)
}

function differenceInArrays(firstArray, secondArray) {
  return lodash.difference(firstArray, secondArray)
}

function fillArray(arr, value) {
  return lodash.fill(arr, value)
}

function calculateMean(arr) {
  return lodash.mean(arr)
}

function camelCase(str) {
  return lodash.camelCase(str) 
}

function capitalize(str) {
  return lodash.capitalize(str)
}

function sortByNames(arr) {
  return lodash.sortBy(arr, "name")
}

function flatArrayAndCalculateMean(arr) {
  return lodash.mean(lodash.flatten(arr))
}

function sortByNamesAndCapitalizeFirstLetter(arr) {
  return lodash.map(lodash.sortBy(arr, "name"),obj => lodash.capitalize(obj.name))
}

function transformToSnakeCaseAndAllCaps(arr) {
  return lodash.map(arr, str => lodash.toUpper(lodash.snakeCase(str)))
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
