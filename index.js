const _ = require('lodash');

function sum(a, b) {
  const add =_.add(a,b)
  return add;// Use de add() function from lodash to sum the two numbers
}

function filterFalsyValues(arr) {
  const list = _.compact (arr)
  return list;// Use the compact() function from lodash to filter the array
}

function differenceInArrays(firstArray, secondArray) {
  const difList = _.difference(firstArray, secondArray)
  return difList;// Use the difference() function from lodash to get the difference between the two arrays
}

function fillArray(arr, value) {
  const fillList = _.fill(arr, value)
  return fillList;// Use the fill() function from lodash to fill the array with the value
}

function calculateMean(arr) {
  const prin = _.mean(arr)
  return prin;// Use the mean() function from lodash to calculate the mean of the array
}

function camelCase(str) {
  const pepe = _.camelCase(str)
  return pepe;// Use the camelCase() function from lodash to convert the string to camelCase
}

function capitalize(str) {
  const upper = _.capitalize(str)
  return upper;// Use the capitalize() function from lodash to capitalize the string
}

function sortByNames(arr) {
  const orgnz =_.sortBy(arr, ['name']);
  return orgnz;// Use the sortBy() function from lodash to sort the array by name
}

function flatArrayAndCalculateMean(arr) { 
  const result = _.flatten(arr);
  return _.mean(result);
  
  // Use the mean() function from lodash to calculate the mean of the array
  // Use the flatten() function from lodash to flatten the array
}

function sortByNamesAndCapitalizeFirstLetter(arr) {

  const orgList = _.sortBy( arr, ['name']);
  const upper = orgList.map( el => _.capitalize( el.name ) );

  return orgList,upper;
  // Use the sortBy() function from lodash to sort the array by name
  // Use the capitalize() function from lodash to capitalize the first letter of each name
}

function transformToSnakeCaseAndAllCaps(arr) {
const snake = arr.map ((str) => _.toUpper(_.snakeCase(str)))
return snake;
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