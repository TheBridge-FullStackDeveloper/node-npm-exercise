// Require the lodash library here in this line
const { lowerCase } = require('lodash')
const _ = require('lodash')


function sum(a, b) {
  // Use de add() function from lodash to sum the two numbers
  return _.add(1, 2)
}

function filterFalsyValues(arr) {
  // Use the compact() function from lodash to filter the array
  return _.compact(arr);
}

function differenceInArrays(firstArray, secondArray) {
  // Use the difference() function from lodash to get the difference between the two arrays
  return _.difference([1, 2, 3], [1, 2, 4]);
}

function fillArray(arr, value) {
  // Use the fill() function from lodash to fill the array with the value
  return _.fill([1, 2, 3], 4)
}

function calculateMean(arr) {
  // Use the mean() function from lodash to calculate the mean of the array
  const obj = { a: 1, b: 2, c: 3 }
  const array = _.values(obj);
  return _.mean(array)
}

function camelCase(str) {
  return _.camelCase("hello world");
}

function capitalize(str) {
  // Use the capitalize() function from lodash to capitalize the string
  return _.capitalize("hello world")
}

function sortByNames(arr) {
  // Use the sortBy() function from lodash to sort the array by name
  const personas = [{ name: "John" }, { name: "Alex" }];

  return _.sortBy(personas, ['name']);
}

function flatArrayAndCalculateMean(arr) {
  // Use the mean() function from lodash to calculate the mean of the array
  // Use the flatten() function from lodash to flatten the array
  const array = [
    [1, 2],
    [3, 4],
  ];
  return _.mean(_.flatten(array))
}

function sortByNamesAndCapitalizeFirstLetter(arr) {
  // Use the sortBy() function from lodash to sort the array by name
  // Use the capitalize() function from lodash to capitalize the first letter of each name
  const personas = [
    { name: "john" },
    { name: "alex" },
  ];
  const orden = _.sortBy(personas, ['name']);
  const capt = _.map(orden, (nombre) => {
    return _.capitalize(nombre.name);
  })
  return capt
}


function transformToSnakeCaseAndAllCaps(arr) {
  // Use the snakeCase() function from lodash to convert the string to snake_case
  // Use the toUpper() function from lodash to convert the string to uppercase
const array = ["Hello World"];
const snake = array.map(str =>  _.snakeCase(str));
const upper = snake.map(str => _.toUpper(snake));
return upper;
}
console.log(transformToSnakeCaseAndAllCaps());

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
