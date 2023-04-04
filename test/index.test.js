const katas = require("../index")

test("adds 1 + 2 to equal 3", () => {
  expect(katas.sum(1, 2)).toBe(3);
});

test("should filter falsy values from array", () => {
  expect(katas.filterFalsyValues([0, 1, false, 2, "", 3])).toEqual([1, 2, 3]);
});

test("should return the different values in two arrays", () => {
  expect(katas.differenceInArrays([1, 2, 3], [1, 2, 4])).toEqual([3]);
});

test("should fill array with numbers", () => {
  expect(katas.fillArray([1, 2, 3], 4)).toEqual([4, 4, 4]);
});

test("should calculate mean", () => {
  expect(katas.calculateMean([1, 2, 3])).toEqual(2);
});

test("should convert string to camelCase", () => {
  expect(katas.camelCase("hello world")).toEqual("helloWorld");
});

test("should capitalize first letter of string", () => {
  expect(katas.capitalize("hello world")).toEqual("Hello world");
});

test("should sort array of objects by name", () => {
  expect(katas.sortByNames([{ name: "John" }, { name: "Alex" }])).toEqual([
    { name: "Alex" },
    { name: "John" },
  ]);
});

test("should flatten array and calculate mean", () => {
  expect(
    katas.flatArrayAndCalculateMean([
      [1, 2],
      [3, 4],
    ])
  ).toEqual(2.5);
});

test("should sort array of objects by name and capitalize first letter", () => {
  expect(
    katas.sortByNamesAndCapitalizeFirstLetter([
      { name: "john" },
      { name: "alex" },
    ])
  ).toEqual(["Alex", "John"]);
});

test("should transform array of strings to snake_case and all caps", () => {
  expect(katas.transformToSnakeCaseAndAllCaps(["Hello World"])).toEqual([
    "HELLO_WORLD",
  ]);
});
