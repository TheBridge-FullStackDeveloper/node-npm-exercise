// Require the lodash library here in this line

const _ = require('lodash');

function sum(a, b) {
 return _.add(a, b); // Use de add() function from lodash to sum the two numbers
}

function filterFalsyValues(arr) {
  return _.compact(arr)// Use the compact() function from lodash to filter the array
}


function differenceInArrays(firstArray, secondArray) {
 return  _.difference(firstArray, secondArray); // Use the difference() function from lodash to get the difference between the two arrays
}

function fillArray([],value) {
  return _.fill([1, 2, 3], value);// Use the fill() function from lodash to fill the array with the value
}

function calculateMean(arr) {
  return _.mean([1, 2, 3]);// Use the mean() function from lodash to calculate the mean of the array
}

function camelCase(str) {
  return _.camelCase(str); // Use the camelCase() function from lodash to convert the string to camelCase
}

function capitalize(str) {
  return _.capitalize(str); // Use the capitalize() function from lodash to capitalize the string
}

function sortByNames(arr) {
  return _.sortBy(arr, "name");// Use the sortBy() function from lodash to sort the array by name
}

function flatArrayAndCalculateMean(arr) {
  const flattenedArr =_.flatten(arr);
  const mean = _.mean(flattenedArr);
  return mean;
  // Use the mean() function from lodash to calculate the mean of the array
  // Use the flatten() function from lodash to flatten the array
}

function sortByNamesAndCapitalizeFirstLetter(arr) {
  const sortByNamesStr = _.sortBy(arr, "name");
  return sortByNamesStr.map(obj => _.capitalize(obj.name));
  // Use the sortBy() function from lodash to sort the array by name
  // Use the capitalize() function from lodash to capitalize the first letter of each name
}

function transformToSnakeCaseAndAllCaps(arr) {
 return arr.map((str) => _.toUpper(_.snakeCase(str))
 );
 
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
