/*
Output the sum of a space-separated string of digits.

Input Format

The input consists of a single space-separated string of 3 digits: '27 4 2019'

Constraints

There is only one string: a space-separated string of 3 digits: '27 4 2019'

Output Format

A single integer that is the sum of the space-separated digits from the input.

Sample Input 0
4 27 2019

Sample Output 0
2050

Explanation 0
The space-separated string of digits are summed giving a total of 2050.
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
    const digits = readLine();

    // Write your code here
}

/*
Solution:

var digits = "4 27 2019"
function main() {
  var digitString = digits.split(" ");
  var sum = 0;
  for(var i = 0; i < digitString.length; i++)
  {
    digitString[i] = +digitString[i];
    sum = sum + digitString[i];
  }

  console.log(digitString);
  return "Sum of digits is " + sum;
}
main(digits);
*/
