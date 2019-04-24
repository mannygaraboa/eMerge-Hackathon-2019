/*
Given the mapping a=1, b=2,…, z=26, and an encoded message, count the number of ways it can be decoded.

For example, the message "111" should be 3, since it could be decoded as "aaa", "ka", and "ak".

Write a function named "get_encodings_count" that takes one argument "s" and returns the number of ways the string "s" can be decoded.

If a message begins with a "0", it is not decodable. For example, an input of "001" is not decodable and must be handled by returning a "0".

"", the empty string, should return 1:

""
"1" should return 1, since we can parse it as the following:

"a" + "".
"11" should return 2, since we can parse it as the following:

"a" + "a" + ""
"k" + "".
"111" should return 3, since we can parse it as the following:

"a" + "k" + ""
"k" + "a" + ""
"a" + "a" + "a" + ""
"01" should return 0, since no letter starts with 0 in our mapping

Input Format

A string of digits of length N where N >=0 and N <= 200

Constraints

The length of the input string may vary from 0 to 200 inclusive and may begin with a '0'.

Output Format

An integer that is the number of ways the string can be decoded.

Sample Input 0
111

Sample Output 0
3

Explanation 0
"111" should return 3 since we can parse it as:
"a" + "k" + ""
"k" + "a" + ""
"a" + "a" + "a" + ""

Sample Input 1
1482686

Sample Output 1
4

Sample Input 2
94325454

Sample Output 2
2
*/

'use strict';

const fs = require('fs');

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

/*
 * Complete the 'get_encodings_count' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function get_encodings_count(s) {
    // Write your code here

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const digits = readLine();

    const count = get_encodings_count(digits);

    ws.write(count + '\n');

    ws.end();
}
