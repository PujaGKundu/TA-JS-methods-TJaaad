// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
console.log(numbers.indexOf(101));
// - Find the last index of `9` in numbers
console.log(numbers.lastIndexOf(9));
// - Convert value of strings array into a sentance like "This is a collection of words"
console.log(strings.join(" "));
// - Add two new words in the strings array "called" and "sentance"
let newString = [...strings];
newString.push("called", "sentance");
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
console.log(newString.join(" "));
// - Remove the first word in the array (strings)
let removeString = [...strings];
removeString.shift();
// - Find all the words that contain 'is' use string method 'includes'
function is(string) {
  if (string.includes('is')) return string;
}
let isPresent = strings.filter(is);
// - Find all the words that contain 'is' use string method 'indexOf'
function is(string) {
  if (string.includes('is')) return string.indexOf('is');
}
let isPresentIndex = strings.filter(is);
// - Check if all the numbers in numbers array are divisible by three use array method (every)
let divisibleBy3 = numbers.every(function (number) {
  return number % 2 === 0;
});
// -  Sort Array from smallest to largest
let sorts = [...numbers];
function compareFunction(a, b) {
  return a - b;
}
sorts.sort(compareFunction);
// - Remove the last word in strings
let pops = [...strings];
pops.pop();
// - Find largest number in numbers
let largestNum = numbers.reduce((acc, num) => {
  if (acc > num) {
    return acc;
  }
}, 0);
// - Find longest string in strings
let largestString = strings.reduce((acc, num) => {
  if (acc.length > num.length) {
    return acc;
  }
}, " ");
// - Find all the even numbers
function isEven(num) {
  return num % 2 === 0;
}
let evenNumbers = numbers.filter(isEven);
// - Find all the odd numbers
function isOdd(num) {
  return num % 2 !== 0;
}
let oddNumbers = numbers.filter(isOdd);
// - Place a new word at the start of the array use (unshift)

// - Make a subset of numbers array [18,9,7,11]

// - Make a subset of strings array ['a','collection']

// - Replace 12 & 18 with 1221 and 1881

// - Replace words in strings array with the length of the word

// - Find the sum of the length of words using above question

// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'

// - Create new array with only first name

// - Create new array with all the full names (ex: "Joe Blogs")

// - Sort the array created above alphabetically

// - Create a new array that contains only user who has at least one vowel in the firstname.
