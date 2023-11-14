const lodash = require('lodash')
function sum(a, b) {
 return lodash.add( a , b)// Use de add() function from lodash to sum the two numbers
}

function filterFalsyValues(arr) {
return lodash.compact(arr)// Use the compact() function from lodash to filter the array
}

function differenceInArrays(firstArray, secondArray) {
 return lodash.difference(firstArray, secondArray) // Use the difference() function from lodash to get the difference between the two arrays
}

function fillArray(arr, value) {
 return lodash.fill(arr, value) // Use the fill() function from lodash to fill the array with the value
}

function calculateMean(arr) {
 return lodash.mean(arr)// Use the mean() function from lodash to calculate the mean of the array
}

function camelCase(str) {
  return lodash.camelCase(str)// Use the camelCase() function from lodash to convert the string to camelCase
}

function capitalize(str) {
 return lodash.capitalize(str) // Use the capitalize() function from lodash to capitalize the string
}

function sortByNames(arr) {
  return lodash.sortBy(arr, [function(o) { return o.name; }]);// Use the sortBy() function from lodash to sort the array by name
}

function flatArrayAndCalculateMean(arr) {
  const result = lodash.flatten(arr)
  return lodash.mean(result)// Use the mean() function from lodash to calculate the mean of the array
  // Use the flatten() function from lodash to flatten the array
}


  function sortByNamesAndCapitalizeFirstLetter(arr) {
    const sortedArray = lodash.sortBy(arr, ['name']);
    const capitalized = sortedArray.map(n=> lodash.capitalize(n.name));
    return capitalized
  } 
  // Use the sortBy() function from lodash to sort the array by name
  // Use the capitalize() function from lodash to capitalize the first letter of each name


  function transformToSnakeCaseAndAllCaps(arr) {
    const transformedArray = arr.map((str) => lodash.toUpper(lodash.snakeCase(str)));
    return transformedArray;
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
