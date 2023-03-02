//Below is the the solution to Question No. 1
/* 
Mutating array methods are methods that modify the original array while non-mutating array methods are methods that do not modify the original array, but instead return a new array with the modified elements.

/* Examples of mutating array methods are:
push()
pop()
shift()
unshift()
splice()
*/

/* Examples of non-mutating array methods are:
slice()
concat()
map()
filter()
reduce()
*/



//Below is the the solutions to Question No. 2
let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];

// The code below adds ‘Kotlin’ to the end of the array
languages.push('Kotlin');

//The code below adds  ‘Java’ after ‘Ruby’
languages.splice(3, 0, 'Java');

//The code below removes the first item in the array
languages.shift();

//The code below adds ’Scala’ and ‘Swift’ to the beginning of the array
languages.splice(0, 0, 'Scala', 'Swift');

//The code below replaces ‘PHP’ with ‘Go’ and ‘Rust’
languages.splice(5, 1, 'Go', 'Rust');



//Below is the the solution to Question No. 3
/* 
If the function changeFruit(fruit) is called, passing the fruit array as an argument, the value of fruit will be:

['apple', 'mango', 'orange']

This is because the changeFruit function removes the third element of the fruit array, 'banana' (which has an index of 2) and replaces it with 'orange' and then returns the modified fruit array. The first and second elements of the array remain unchanged.
*/



//Below is the the solution to Question No. 4
function findMaximumValue(numbers) {
  return Math.max(...numbers); //returns the maximum value from the array passed in as arguement when calling the function findMaximumValue
};
let showResult = findMaximumValue([2, 3, 18, 21, -6, -9]); //saves the returned value to a variable showResult
console.log(showResult); //logs out 21 as the maximum value



//Below is the the solution to Question No. 5
function valTimesIndex(numbers) { //declares the function with the numbers array as a parameter
  return numbers.map((value, index) => value * index); //the map method loop through the array and returns the product of each value & its index
 };
const numbers = [1, 2, 3, 5, 7];
const newArray = valTimesIndex(numbers); //The new array returned by the valTimesIndex function is stored in a new array newArray
 console.log(newArray); //logs out the values in the new array


