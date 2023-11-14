const lodash = require ('lodash') ; 

function sum(a, b) {
  return lodash.add( a , b );
}

function filterFalsyValues(arr) {
  return lodash.compact(arr);
}

function differenceInArrays(firstArray, secondArray) {
 return lodash.difference(firstArray, secondArray);
  // Use the difference() function from lodash to get the difference between the two arrays
}

function fillArray(arr, value) {
  return lodash.fill(arr, value);
  // Use the fill() function from lodash to fill the array with the value
}

function calculateMean(arr) {
  return lodash.mean(arr);
  // Use the mean() function from lodash to calculate the mean of the array
}

function camelCase(str) {
  return lodash.camelCase(str);
  // Use the camelCase() function from lodash to convert the string to camelCase
}

function capitalize(str) {
  return lodash.capitalize(str);
  // Use the capitalize() function from lodash to capitalize the string
}

function sortByNames(arr) {
  return lodash.sortBy(arr, ['name']);
  // Use the sortBy() function from lodash to sort the array by name
}

function flatArrayAndCalculateMean(arr) {
 return lodash.mean(lodash.flatten(arr));
  // Use the mean() function from lodash to calculate the mean of the array
  // Use the flatten() function from lodash to flatten the array
}

function sortByNamesAndCapitalizeFirstLetter(arr) {
return lodash.sortBy(arr, ['name']).map(el => lodash.capitalize(el.name)); 
  // Use the sortBy() function from lodash to sort the array by name
  // Use the capitalize() function from lodash to capitalize the first letter of each name
}

function transformToSnakeCaseAndAllCaps(arr) {
  return arr.map((str) => lodash.toUpper(lodash.snakeCase(str)));
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
