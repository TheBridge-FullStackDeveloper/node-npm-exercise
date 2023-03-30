const _ = require("lodash");

function sum(a, b) {
  const result = _.add(a,b);
  return result;
}

function filterFalsyValues(arr) {
  const filteredArray = _.compact(arr);
  return filteredArray;
}

function differenceInArrays(firstArray, secondArray) {
  const differences = _.difference(firstArray, secondArray);
  return differences;
}

function fillArray(arr, value) {
  const filledArray = _.fill(arr, value);
  return filledArray;
}

function calculateMean(arr) {
  const mean = _.mean(arr);
  return mean;
}

function camelCase(str) {
  const newString = _.camelCase(str);
  return newString;
}

function capitalize(str) {
  const newString = _.capitalize(str);
  return newString;
}

function sortByNames(arr) {
  const orderedArray = _.sortBy(arr, "name");
  return orderedArray;
}

function flatArrayAndCalculateMean(arr) {
  const flattenedArray = _.flatten(arr);
  return _.mean(flattenedArray);
}

function sortByNamesAndCapitalizeFirstLetter(arr) {
  const orderedArray = _.sortBy(arr, "name");
  let resultArray = [];
  for (let i = 0; i < orderedArray.length; i++) {
    orderedArray[i].name = _.capitalize(orderedArray[i].name);
    resultArray.push(orderedArray[i].name);
  }
  return resultArray;
}

function transformToSnakeCaseAndAllCaps(arr) {
  let newArray = arr;
  for (let i = 0; i < newArray.length; i++) {
    newArray[i] = _.snakeCase(newArray[i]);
  }

  for (let i = 0; i < newArray.length; i++) {
    newArray[i] = _.toUpper(newArray[i]);
  }

  return newArray;
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
