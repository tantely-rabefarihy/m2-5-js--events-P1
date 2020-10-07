// Exercise 4
//
// 1. Write a function that accepts an array of objects and a key (string) as arguments and returns a new array with only the values of the corresponding key.
// e.g. getValues([{name: 'chris', age: 23}, {name: 'liv', age: 36}, {name: 'dave', age: 43}, 'age']) returns [23, 36, 43]

// - If the provided key is not any of the objects, return null for that value;

const getValues = (arr, key) => {
  // Insert missing solution please
  const newArray = [];
  arr.forEach(function (item) {
    return newArray.push(item[key] || null);
  });
  return newArray;
};

// 2. Do a console.log to verify your function.

// 3. Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

module.exports = getValues;
