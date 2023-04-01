const { iteratee } = require('lodash')
const _ = require('lodash')

function sum(a, b) {
  // Use de add() function from lodash to sum the two numbers
  
  _.add(a, b)
}
sum(1, 2)
// => 3

function filterFalsyValues(arr) {
  // Use the compact() function from lodash to filter the array
 _.compact(arr) 
}
filterFalsyValues([0, 1, false, 2, '', 3])
// => [1, 2, 3]

function differenceInArrays(firstArray, secondArray) {
  // Use the difference() function from lodash to get the difference between the two arrays
  _.difference(firstArray, secondArray)
}
differenceInArrays([1, 2, 3], [1, 2, 4])
// => [3]


function fillArray(arr, value) {
  // Use the fill() function from lodash to fill the array with the value
  _.fill(arr, value)
}
fillArray([1, 2, 3], 4)
// => [4, 4, 4]

function calculateMean(arr) {
  // Use the mean() function from lodash to calculate the mean of the array
  _.mean(arr)
}
calculateMean([1, 2, 3])
// => 2

function camelCase(str) {
  // Use the camelCase() function from lodash to convert the string to camelCase
  _.camelCase(str)
}
camelCase("hello world")
// => "helloWorld"

function capitalize(str) {
  // Use the capitalize() function from lodash to capitalize the string
  _.capitalize(str)
}
capitalize("hello world")
// => "Hello world"

function sortByNames(arr) {
  // Use the sortBy() function from lodash to sort the array by name
  _.sortBy(arr, 'name')
}
sortByNames([{ 'name': "John" }, { 'name': "Alex" }])
// =>[{ name: "John" }, { name: "Alex" }]

function flatArrayAndCalculateMean(arr) {
  // Use the mean() function from lodash to calculate the mean of the array
  // Use the flatten() function from lodash to flatten the array
  let flattenArr = _.flatten(arr)
  _.mean(flattenArr)
}
flatArrayAndCalculateMean([[1, 2], [3, 4]])
// => 2.5

function sortByNamesAndCapitalizeFirstLetter(arr, prop) {
  // Use the sortBy() function from lodash to sort the array by name
  // Use the capitalize() function from lodash to capitalize the first letter of each name
  let sortArr = _.sortBy(arr, prop)
  const capitalizedArr = sortArr.map(obj => {
  const propVal = obj[prop];
  const capitalizedVal = _.capitalize(propVal);
    return { ...obj, [prop]: capitalizedVal };
  });

  return capitalizedArr;
}
sortByNamesAndCapitalizeFirstLetter([{ name: "john" }, { name: "alex" }], 'name')

// =>[{name: "Alex"}, {name: "John"}]

function transformToSnakeCaseAndAllCaps(arr) {
  // Use the snakeCase() function from lodash to convert the string to snake_case
  // Use the toUpper() function from lodash to convert the string to uppercase
  
  const str = arr.join(", ")
  // let snack = console.log(_.toUpper(str))
  console.log(_.snakeCase(str))
  
}
transformToSnakeCaseAndAllCaps(["Hello World"])
//=> "HELLO_WORLD"

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
