// Require the lodash library here in this line
let _ = require('lodash');

// 1 ✅
function sum(a, b) {
  // Use de add() function from lodash to sum the two numbers
  let addition = _.add(a, b) 
  return addition;
}
//console.log( sum( 1,2 ) );

// 2 ✅
let array = [1,2,'','A','z',3,4];
function filterFalsyValues(arr) {
  // Use the compact() function from lodash to filter the array
  let compacting = _.compact( arr );
  return compacting;
}
//console.log( filterFalsyValues( array ) );

// 3 ✅
let arrayA = [1,2];
let arrayB = [3,4];
function differenceInArrays(firstArray, secondArray) {
  // Use the difference() function from lodash to get the difference between the two arrays
  let difference = _.difference( firstArray, secondArray );
  return difference;
}
//console.log( differenceInArrays( arrayA, arrayB ) );

// 4 ✅
let arrayToFill = ['a','b','c'];
function fillArray(arr, value) {
  // Use the fill() function from lodash to fill the array with the value
  let filled = _.fill( arr, value );
  return filled;
}
//console.log( fillArray( arrayToFill, 5 ) );

// 5 ✅
let arrayC = [2,4,8,9,10]
function calculateMean(arr) {
  // Use the mean() function from lodash to calculate the mean of the array
  let showMean = _.mean( arr );
  return showMean;
}
//console.log( calculateMean(arrayC) );

// 6 ✅
let camellingString = "hola soy tu padre"
function camelCase(str) {
  // Use the camelCase() function from lodash to convert the string to camelCase
  let camelled = _.camelCase( str );
  return camelled;
}
//console.log( camelCase( camellingString ) );
 
// 7 ✅
let capitalizeName = "LANDAETA";
function capitalize(str) {
  // Use the capitalize() function from lodash to capitalize the string
  let showCapi = _.capitalize( str );
  return showCapi;
}
//console.log( capitalize( capitalizeName ) );

// 8 ✅
const superheroes = [
  { 'name' : 'Omar' },
  { 'name' : 'Jesus'  },
];
function sortByNames(arr) {
  // Use the sortBy() function from lodash to sort the array by name
  const object = _.sortBy( arr, [ (h) => h.name ] );
  return object;
}
//console.log( sortByNames(superheroes) );

// 9 ✅
let arrayD = [1,[2,[3,4,5],6]];
function flatArrayAndCalculateMean(arr) {
  // Use the mean() function from lodash to calculate the mean of the array
  // Use the flatten() function from lodash to flatten the array
  let flatting = _.flatten( arr );
  let makeMean = _.mean( flatting );

  return makeMean;
}
//console.log( flatArrayAndCalculateMean( arrayD ) );

// 10 ✅
let arrayE = [
  { name  : 'john'},
  { name  : 'alex'},
];
function sortByNamesAndCapitalizeFirstLetter(arr) {
  // Use the sortBy() function from lodash to sort the array by name
  // Use the capitalize() function from lodash to capitalize the first letter of each name
  let sortingArray = _.sortBy( arr, ( n ) => n.name );
  let capi = sortingArray.map( n => _.capitalize( n.name ) );

  return capi;
}
//console.log( sortByNamesAndCapitalizeFirstLetter( arrayE ) );

// 11
let greets = ["Hello world"];
function transformToSnakeCaseAndAllCaps(arr) {
  // Use the snakeCase() function from lodash to convert the string to snake_case
  // Use the toUpper() function from lodash to convert the string to uppercase
  return arr.map( (str) => _.toUpper(_.snakeCase(str)));
}
//console.log( transformToSnakeCaseAndAllCaps( greets ) );

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
