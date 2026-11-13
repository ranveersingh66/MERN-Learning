// Array Methods
// Map, filter, find, reduce

const newArray = [1, 2, 3, 4, 5];

// Map Method
// Map method creates a new array by calling a specific function on every element of an existing array

const doubleArray = newArray.map((data) => data * 2); // Multiplies each element of the array by 2
console.log(doubleArray);

const tripleArray = newArray.map((data) => data * 3); // Multiplies each element of the array by 3
console.log(tripleArray);

const arr = newArray.map((data) => data + 2); // Adds 2 to each element of the array
console.log(arr);  // Output: [3, 4, 5, 6, 7]

// Filter Method
// Filter method creates a new array with all elements that pass the test implemented by the provided function

const evenNum = newArray.filter((data) => data % 2 === 0); // Filters out even numbers from the array
console.log("evenNum:", evenNum); // Output: [2, 4]

// Find Method
// Find method returns the value of the first element in the array that satisfies the provided testing function

const findNum = newArray.find((data) => data == 2); // Finds the first element in the array that is equal to 2
console.log("findNum:", findNum); // Output: 2 

// Reduce Method
// Reduce method executes a reducer function on each element of the array, resulting in a single output value

const reduceRes = newArray.reduce((accumulatorValue, currentValue) =>{
  return accumulatorValue + currentValue 
}, 0) // Adds all the elements of the array together, starting with an initial value of 0
console.log("reduceRes:", reduceRes); // Output: 15


// Reduce method Example
const cartItems = [
  {
    itemName: "Shirt",
    price: 20,
    quantity: 1
  },
  {
    itemName: "Pants",
    price: 30,
    quantity: 2
  },
  {
    itemName: "Shoes",
    price: 50,
    quantity: 3
  }
]

const totalPrice = cartItems.reduce((accumulator, currentItem) => {
  return accumulator + (currentItem.price * currentItem.quantity) // Calculates the total price of all items in the cart by multiplying the price of each item by its quantity and adding it to the accumulator 
}, 0)
console.log("totalPrice:", totalPrice); // Output: 230

