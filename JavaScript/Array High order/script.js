// Array Methods
// Map, filter, find, reduce

const newArray = [1, 2, 3, 4, 5];
console.log(newArray);

// Map Method
// Map method creates a new array by calling a specific function on every element of an existing array

const doubleArray = newArray.map((data) => data * 2); // Multiplies each element of the array by 2
console.log(doubleArray);

const tripleArray = newArray.map((data) => data * 3); // Multiplies each element of the array by 3
console.log(tripleArray);

const arr = newArray.map((data) => data + 2); // Adds 2 to each element of the array
console.log(arr);  // Output: [3, 4, 5, 6, 7]

