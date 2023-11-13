// Require the lodash library here in this line
const _ = require('lodash');

function sum(a, b) {
  // Use de add() function from lodash to sum the two numbers
  
  return _.add(1, 2);
}

function filterFalsyValues(arr) {
  // Use the compact() function from lodash to filter the array

 return  _.compact([0, 1, false, 2, '', 3]);

}

function differenceInArrays(firstArray, secondArray) {
  // Use the difference() function from lodash to get the difference between the two arrays

 return _.difference([1, 2, 3], [1, 2, 4]);
}

function fillArray(arr, value) {
  // Use the fill() function from lodash to fill the array with the value

 return _.fill([1, 2, 3], 4);
}

function calculateMean(arr) {
  // Use the mean() function from lodash to calculate the mean of the array

  return _.mean([1, 2, 3]);
}

function camelCase(str) {
  // Use the camelCase() function from lodash to convert the string to camelCase

  _.camelCase('hello world');
}

function capitalize(str) {
  // Use the capitalize() function from lodash to capitalize the string

  _.capitalize('hello world');
}

function sortByNames(arr) {
  // Use the sortBy() function from lodash to sort the array by name
  let names = [
    {"names": "Alex"},
    {"names": "john"},
  ];

  _.sortBy(names, [function(o){ return o.names; }]);
}

function flatArrayAndCalculateMean(arr) {
  // Use the mean() function from lodash to calculate the mean of the array
  // Use the flatten() function from lodash to flatten the array
  
  const array = [[1, 2], [3, 4]];
const flattenedArray = _.flatten(array);
const mean = _.mean(flattenedArray);

return mean;
}

function sortByNamesAndCapitalizeFirstLetter(arr) {
  // Use the sortBy() function from lodash to sort the array by name
  // Use the capitalize() function from lodash to capitalize the first letter of each name

  const sortByNameAndCapitalizeFirstLetter = (array) => {
    const sortedArray = _.sortBy(array, ['name']);
    return sortedArray.map(obj => ({ ...obj, name: _.capitalize(obj.name) }));
  }
  
  const people = [
    { name: 'alex' },
    { name: 'jonh'},
  ];
  
  const sortedAndCapitalizedPeople = sortByNameAndCapitalizeFirstLetter(people);
  return sortedAndCapitalizedPeople;
}

function transformToSnakeCaseAndAllCaps(arr) {
  // Use the snakeCase() function from lodash to convert the string to snake_case
  // Use the toUpper() function from lodash to convert the string to uppercase
  let text = _.snakeCase('hello world');

    text = _.toUpper(text);
    return text;
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
