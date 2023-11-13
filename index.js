// Require the lodash library here in this line

const _ = require('lodash');

function sum(a, b) {
  // Use de add() function from lodash to sum the two numbers
  return _.add(a, b)
}

function filterFalsyValues(arr) {
  // Use the compact() function from lodash to filter the array
  return _.compact(arr)
}

function differenceInArrays(firstArray, secondArray) {
  // Use the difference() function from lodash to get the difference between the two arrays
  return _.difference(firstArray, secondArray)
}

function fillArray(arr, value) {
  // Use the fill() function from lodash to fill the array with the value
  return _.fill(arr, value)
}

function calculateMean(arr) {
  // Use the mean() function from lodash to calculate the mean of the array
  return _.mean(arr)
}

function camelCase(str) {
  // Use the camelCase() function from lodash to convert the string to camelCase
  return _.camelCase(str)
}

function capitalize(str) {
  // Use the capitalize() function from lodash to capitalize the string
  return _.capitalize(str)
}

function sortByNames(arr) {
  // Use the sortBy() function from lodash to sort the array by name
  return _.sortBy(arr,["name"])
}

function flatArrayAndCalculateMean(arr) {
  // Use the mean() function from lodash to calculate the mean of the array
  // Use the flatten() function from lodash to flatten the array
  return _.mean(_.flatten(arr))
}

function sortByNamesAndCapitalizeFirstLetter(arr) {
  // Use the sortBy() function from lodash to sort the array by name
  // Use the capitalize() function from lodash to capitalize the first letter of each name
  return _.map(_.sortBy(arr, 'name'), obj => _.capitalize(obj.name));

}

function transformToSnakeCaseAndAllCaps(arr) {
  // Use the snakeCase() function from lodash to convert the string to snake_case
  // Use the toUpper() function from lodash to convert the string to uppercase
  return arr.map(str => _.snakeCase(str).toUpperCase());
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
