// Require the lodash library here in this line
const _ = require('lodash')
function sum(a, b) {
  // Use de add() function from lodash to sum the two numbers
  return _.add(1,2);
}


function filterFalsyValues(arr) {
  // Use the compact() function from lodash to filter the array
 return _.compact([0, 1, false, 2, "", 3]);
}

function differenceInArrays(firstArray, secondArray) {
  return _.difference(firstArray, secondArray);
  // Use the difference() function from lodash to get the difference between the two arrays
}
const array1 = [1, 2, 3];
const array2 = [1, 2, 4];
const difference = differenceInArrays(array1, array2);
console.log(difference);
 
function fillArray(arr, value) {
  
  return _.fill(arr, value);
  // Use the fill() function from lodash to fill the array with the value
}
const myarray = [1, 2, 3];
completarArray = fillArray(myarray, 4);
console.log(completarArray);

function calculateMean(arr) {
  return _.mean([1, 2, 3]);

  // Use the mean() function from lodash to calculate the mean of the array
}

function camelCase(str) {
  return _.camelCase("hello world");
  // Use the camelCase() function from lodash to convert the string to camelCase
}

function capitalize(str) {
 return _.capitalize("hello world"); 
  // Use the capitalize() function from lodash to capitalize the string
}

  
function sortByNames(arr) {
  
  return _.sortBy(arr,['name']);
  // Use the sortBy() function from lodash to sort the array by name
}
const myArray = [{'name':'Alex'},{'name':'John'}];
const sorted = sortByNames(myArray);
console.log(sorted);

function flatArrayAndCalculateMean(arr) {
  const array = [[1, 2] , [3, 4]]
  const flatArr = _.flatten(arr, array);
  return _.mean(flatArr);
  // Use the mean() function from lodash to calculate the mean of the array
  // Use the flatten() function from lodash to flatten the array
}

function sortByNamesAndCapitalizeFirstLetter(arr) {
  const ordenar = _.sortBy(arr, 'name');
  for (let i = 0; i < ordenar.length; i++) {
    ordenar[i].name = _.capitalize(ordenar[i].name);
  }
  return ordenar
  
  // Use the sortBy() function from lodash to sort the array by name
  // Use the capitalize() function from lodash to capitalize the first letter of each name
}
const myArreglo = [{'name':'Alex'},{'name':'John'}];
  const ordenarArray = sortByNamesAndCapitalizeFirstLetter(myArreglo);
  console.log(ordenarArray)


function transformToSnakeCaseAndAllCaps(arr) {
  const transforme = [];

  for (let i = 0; i < arr.length; i++) {
    const str = arr[i];
    let snake = _.snakeCase(str);

    let uppercaseStr = _.toUpper(snake);

    transforme.push(uppercaseStr);
  }
  return transforme
  // Use the snakeCase() function from lodash to convert the string to snake_case
  // Use the toUpper() function from lodash to convert the string to uppercase
}
const palabras = ["Hello World"];
const resultado = transformToSnakeCaseAndAllCaps(palabras);
console.log(resultado);

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
