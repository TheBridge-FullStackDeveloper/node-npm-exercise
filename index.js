const _ = require('lodash')


function sum(a, b) {
  return  _.add(a,b)
  
}

function filterFalsyValues(arr) {
  return _.compact(arr)
}

function differenceInArrays(firstArray, secondArray) {
  return _.difference(firstArray,secondArray)
  // Use the difference() function from lodash to get the difference between the two arrays
}

function fillArray(arr, value) {
  return _.fill(arr,value)
  // Use the fill() function from lodash to fill the array with the value
}

function calculateMean(arr) {
  return _.mean(arr)
  // Use the mean() function from lodash to calculate the mean of the array
}

function camelCase(str) {
  return _.camelCase(str)
  // Use the camelCase() function from lodash to convert the string to camelCase
}

function capitalize(str) {
  return _.capitalize(str)
  // Use the capitalize() function from lodash to capitalize the string
}

function sortByNames(arr) {
  return _.sortBy(arr,["name"])
  // Use the sortBy() function from lodash to sort the array by name
}

function flatArrayAndCalculateMean(arr) {
    const flat= _.flatten(arr)
    return _.mean(flat)
  // Use the mean() function from lodash to calculate the mean of the array
  // Use the flatten() function from lodash to flatten the array
}

function sortByNamesAndCapitalizeFirstLetter(arr) {


  const mapFn= _.map(arr, 'name')
  const resort= _.sortBy(mapFn)
  console.log('> resort: ',resort ) // ['alex', 'john']
  return _.map(resort, _.capitalize)
  // Use the sortBy() function from lodaresortsh to sort the array by name
  // Use the capitalize() function from lodash to capitalize the first letter of each name
}

function transformToSnakeCaseAndAllCaps(arr) {
  const arraySnake = _.map(arr, _.snakeCase)
  const resut = _.map(arraySnake, _.toUpper)
  return resut
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
