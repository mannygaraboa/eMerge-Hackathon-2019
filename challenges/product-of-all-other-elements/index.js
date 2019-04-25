/*
Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

Input Format

Each line of input will be a space-separated string of positive integers.

Constraints

Every item in the space-separated string will be an integer.

Output Format

A space-separated string of integers representing the product of all the numbers in the original array except the one at i.

Sample Input 0
1 2 3 4 5

Sample Output 0
120 60 40 30 24

Sample Input 1
4 6 8 10 12 14 16 18

Sample Output 1
23224320 15482880 11612160 9289728 7741440 6635520 5806080 5160960

Sample Input 2
2 5 8

Sample Output 2
40 16 10

*/

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {

    const items = readLine().replace(/\s+$/g, '').split(' ').map(itemsTemp => parseInt(itemsTemp, 10));
}

/*
// Solution:

var digits = "1 2 3 4"
function main() {
  var digitArray = digits.split(" ");
  var sum = 1;
  var newArray = [];
  for(var i = 0; i < digitArray.length; i++)
  {
    digitArray[i] = +digitArray[i];
    sum = sum * digitArray[i];
    var newValue = sum / digitArray[i];
    newArray.push(newValue);
  }

  console.log(digitArray);
  return newArray;
}
main(digits);
*/