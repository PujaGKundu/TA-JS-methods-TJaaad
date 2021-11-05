let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.

let string = words[0];
function findLongestWord(word) {
  if (string.length < word.length) {
    string = word;
  }
  console.log(string);
}
let longestWord = words.forEach(findLongestWord);

// - Convert the above array "words" into an array of length of word instead of word.

function arrayLength(word) {
  console.log (word.length);
}
let lengthOfWord = words.forEach(arrayLength);

// - Create a new array that only contains word with atleast one vowel.

let newArray = [];
function vowelArray(word) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] === 'a' || word[i] === 'e' || word[i] === 'i' ||  word[i] === 'o' || word[i] === 'u') {
      newArray.push(word);
      break;
    }
  }
  return newArray;
}
words.filter(vowelArray);

// - Find the index of the word "rhythm"

words.indexOf("rhythm");

// - Create a new array that contians words not starting with vowel.

let newArrayNotVowelStart = [];
function vowelNotStartArray(word) {
    if (word[0] !== 'a' && word[0] !== 'e' && word[0] !== 'i' &&  word[0] !== 'o' && word[0] !== 'u') {
      newArrayNotVowelStart.push(word);
    }
  return newArrayNotVowelStart;
}
words.forEach(vowelNotStartArray);

// - Create a new array that contianse words not ending with vowel

let newArrayNotVowelEnd = [];
function vowelNotEndArray(word) {
    if (word[word.length - 1] !== 'a' && word[word.length - 1] !== 'e' && word[word.length - 1] !== 'i' &&  word[word.length - 1] !== 'o' && word[word.length - 1] !== 'u') {
      newArrayNotVowelEnd.push(word);
    }
  return newArrayNotVowelEnd;
}
words.forEach(vowelNotEndArray);

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers

let sum = 0;
function sumArray(number) {
  sum = sum + number;
  return sum;
}
numbers.map(sumArray);

// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]

function multipleOf3 (number) {
  if (number % 3 === 0) return number;
}
let multiple3 = numbers.filter(multipleOf3);

// - Create a new array that contains only even numbers

function evenNumber (number) {
  if (number % 2 === 0) return number;
}
let even = numbers.filter(evenNumber);

// - Create  a new array that contains only odd numbers.

function oddNumber (number) {
  if (number % 2 !== 0) return number;
}
let odd = numbers.filter(oddNumber);

// - Create a new array that should have true for even number and false for odd numbers.

function oddEven (number) {
  if (number % 2 === 0) return true;
  else return false;
}
let evenOdd = numbers.map(oddEven);

// - Sort the above number in assending order.

function compareFumction (a, b) {
  return a -b;
}
let sorting = [...numbers].sort(compareFumction);

// - Does sort mutate the original array?

// Yes, sorting does mutates the original array.

// - Find the sum of the numbers in the array.

let sum = 0;
function sumArray(number) {
  sum = sum + number;
  return sum;
}
numbers.map(sumArray);

//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers

function average(number) {
  console.log (sum / number.length);
}
let ave = numbers.forEach(average);

let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.

let total = 0;
let arrayLen = strings.length;
function averageWordLength(words2) {
  total += words2.length;
  console.log(total / arrayLen);
}
strings.forEach(averageWordLength);