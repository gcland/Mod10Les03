// Mod10Les03

// 1. Exploring Array Manipulation in JavaScript

// Task 1

let fruits = ['apple', 'banana', 'orange'];
fruits.push("watermelon");
console.log(fruits);

console.log(fruits.pop());
console.log(fruits);
console.log();

// Task 2

let numbers = [3, 1, 5, 2, 4];
numbers.sort((a, b) => a - b);
console.log(numbers);

// Task 3

numbers = [3, 1, 5, 2, 4];
console.log(numbers.map(n => n*2)); //outputs numbers doubled
console.log(numbers.filter(n => n%2==1)); //outputs task 3 start numbers array without even numbers 
console.log(numbers.reduce((acc, curr) => acc + curr, 0)); //outputs task 3 start numbers array sum

console.log();

let doubled_numbers = numbers.map(n => n*2) ;
console.log(doubled_numbers); //outputs numbers doubled

let filtereddouble_numbers = doubled_numbers.filter(n => n%2==1);  
console.log(filtereddouble_numbers); //outputs doubled numbers array without even numbers (none because odd number*2 will always be even)

let filtereddoublesum_sumbers = filtereddouble_numbers.reduce((acc, curr) => acc + curr, 0);
console.log(filtereddoublesum_sumbers); //outputs 0
console.log();

// 2. Exploring String Manipulation in JavaScript

// Task 1

let message = "Hello, World!";

console.log(message.length);

// Task 2

let text = "Hello, World!";

console.log(text.toUpperCase());
console.log(text.toLowerCase())
console.log()

// Task 3

let sentence = "The quick brown fox jumps over the lazy dog";
console.log(sentence.substring(20, 25));

// Task 4

sentence = "The quick brown fox";

split = sentence.split(" ")
console.log(split)
console.log(split.forEach(word => console.log(word)))
