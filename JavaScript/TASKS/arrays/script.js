// Max value in an array
function maxArr(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// Sum 
function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Odd numbers
function countOdds(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        // Checks if the number is not divisible by 2
        if (arr[i] % 2 !== 0) {
            count++;
        }
    }
    return count;
}


// 1. Create a starting array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 2. Filter out the odd numbers (keep only the evens)
const evenNumbers = numbers.filter(num => num % 2 === 0);

// 3. Double the remaining even numbers
const doubledEvens = evenNumbers.map(num => num * 2);

// Output the final result to the console
console.log(doubledEvens); 

//  Capitalize a List of Names
const names = ["alex", "samantha", "rob", "rachel", "ed"];

// 1. Capitalize the first letter of each name
const capitalized = names.map(name => name.charAt(0).toUpperCase() + name.slice(1));

// 2. Filter out names shorter than 5 characters
const longNames = capitalized.filter(name => name.length >= 5);

console.log(longNames); 
// Output: [ 'Samantha', 'Rachel' ]