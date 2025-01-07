// Assign Array.isArray to a variable
var isArray = Array.isArray;

// Test with different values
console.log(isArray([])); // true, because it's an array
console.log(isArray([1, 2, 3])); // true, because it's an array
console.log(isArray('string')); // false, because it's a string
console.log(isArray(123)); // false, because it's a number
console.log(isArray({})); // false, because it's an object
console.log(isArray(null)); // false, because it's null
console.log(isArray(undefined)); // false, because it's undefined
