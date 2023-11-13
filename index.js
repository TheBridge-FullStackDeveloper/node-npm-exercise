const _ = require("lodash")

function sum(a, b) {
  const result = _.add(a, b)
  return result
  // Use de add() function from lodash to sum the two numbers
}
//console.log(sum(2,3)) => 5


let array = [0, 1, false, 2, '', 3, undefined, 4]
function filterFalsyValues(arr) {

  const filtered = _.compact(arr)
  return filtered
  // Use the compact() function from lodash to filter the array
}
//console.log (filterFalsyValues(array)) => [ 1, 2, 3, 4 ]


let arr1 = [3, 6]
let arr2 = [3, 8]
function differenceInArrays(firstArray, secondArray) {

  const diference = _.difference(firstArray, secondArray)
  return diference
  // Use the difference() function from lodash to get the difference between the two arrays
}
//console.log(differenceInArrays(arr1,arr2)) => [6]


let fillarr = [1, 2, 3, 4, 5]
function fillArray(arr, value) {

  const filled = _.fill(arr, 3, 2, 4)
  return filled
  // Use the fill() function from lodash to fill the array with the value
}
//console.log(fillArray(fillarr)) => [ 1, 2, 3, 3, 5 ]


let arrAvg = [4, 8, 6, 10]
function calculateMean(arr) {

  const average = _.mean(arr)
  return average
  // Use the mean() function from lodash to calculate the mean of the array
}
//console.log(calculateMean(arrAvg))=> 7


let string = "Fullstack--developer-web"
function camelCase(str) {

  const camel = _.camelCase(str)
  return camel
  // Use the camelCase() function from lodash to convert the string to camelCase
}
//console.log(camelCase(string)) => fullstackDeveloperWeb


let name = "ALBERTO"
function capitalize(str) {

  const uppercase = _.capitalize(str)
  return uppercase
  // Use the capitalize() function from lodash to capitalize the string
}
//console.log(capitalize(name))=> Alberto

let teachers = [
  {"name" : "Molpe" , "age": 17 },
  {"name" : "Giorgio" , "age": 16 }
]
function sortByNames(arr) {
  const teacherNames = _.sortBy(arr,["name","age"])
  return teacherNames
  // Use the sortBy() function from lodash to sort the array by name
}
//console.log(sortByNames(teachers)) => [ { name: 'Giorgio', age: 16 }, { name: 'Molpe', age: 17 } ]


let arr3 = [1,2,[3],4,[5,6,7]]
function flatArrayAndCalculateMean(arr) {
  
  const flatten = _.flatten(arr)
  const mean = _.mean(flatten)
  return mean
  // Use the mean() function from lodash to calculate the mean of the array
  // Use the flatten() function from lodash to flatten the array
}
//console.log(flatArrayAndCalculateMean(arr3)) => 4


let ta =[
  {name : "soraya"},
  {name : "alberto"}
]
function sortByNamesAndCapitalizeFirstLetter(arr) {
  
  const taNames = _.sortBy(arr,( n ) => n.name)
  const firstLetter = taNames.map( n => _.capitalize( n.name ))

  return firstLetter
  // Use the sortBy() function from lodash to sort the array by name
  // Use the capitalize() function from lodash to capitalize the first letter of each name
}

//console.log(sortByNamesAndCapitalizeFirstLetter(ta)) => [ 'Alberto', 'Soraya' ]


let finalExcercise = ["Final Excercise"]
function transformToSnakeCaseAndAllCaps(arr) {
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
