//The underscore (_) character is a valid identifier in JavaScript, which means it can be used as a variable name. By using _ as a variable name for the Lodash object, it provides a short and easy-to-type identifier that is unlikely to conflict with other variable names in the code.

const_ = require('lodash');

function sum(a, b) {
  const _ = require('lodash');

  function sum(a, b) {
    return _.add(a, b);
  }
}

function filterFalsyValues(arr) {
  // Use the compact() function from lodash to filter the array, the _.compact() method from Lodash removes falsy values from the array and return a new array with only the truthy values.
    return _.compact(arr);
  }
  
console.log(filterFalsyValues(['', 'hello', 'world', '', 'foo', 'bar'])); // Output: ["hello", "world", "foo", "bar"]
console.log(filterFalsyValues([false, true, false, true, false, true])); // Output: [true, true, true]
console.log(filterFalsyValues([0, 1, 2, 3, 0, 4, NaN, 5])); // Output: [1, 2, 3, 4, 5]


function differenceInArrays(firstArray, secondArray) {
  return _.difference(firstArray, secondArray);
}

function fillArray(arr, value) {
  return _.fill(arr, value);
}

function calculateMean(arr) {
  return _.mean(arr);
}
//the _.mean function returns the average of the numbers in the array. 
//const numbers = [2,2,4,4,6,6]
//console.log(mean) // outpuy 4

function camelCase(str) {
  return _.camelCase(str);
}
//camelCase removes all symbols separating a word, it also capitalize the first letter of each internal word
//_.camelCase('camel-case-js') returns 'camelCaseJs'

function capitalize(str) {
  return _.capitalize(str);
}
//capitalize the first letter of a string

function sortByNames(arr) {
  return _.sortBy(arr, name => name.toLowerCase());
}
//it sorts by alphabetical order

function flatArrayAndCalculateMean(arr) {
  const flattened = _.flatten(arr);
  return _.mean(flattened);
}
//Same as mean, but flatArrayAndCalculateMean, will organized nested arrays to be accounted in the calculation i.e: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]= [1, 2, 3, 4, 5, 6, 7, 8, 9]
//const myArray = [[2, 2, 2], [4, 4, 4], [6, 6, 6]];
//const meanValue = flatArrayAndCalculateMean(myArray);
//console.log(meanValue); // returns: 6


function sortByNamesAndCapitalizeFirstLetter(arr) {
  return _.chain(arr)
    .sortBy(name => name.toLowerCase())
    .map(_.capitalize)
    .value();
}

function transformToSnakeCaseAndAllCaps(str) {
  const snakeCase = _.snakeCase(str);
  return _.toUpper(snakeCase);
}
//the opposite of camelCase, yet it has a AndAllCaps
//_.snakeCase('the snake case') returns THE_SNAKE_CASE


module.exports = {
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