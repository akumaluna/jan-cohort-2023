/*

Reverse String
Write a function reverseString(str) that takes in a string.
The function should return a new string where the order of the characters is reversed.

*/

/*

Reverse String
Write a function reverseString(str) that takes in a string.
The function should return a new string where the order of the characters is reversed.

*/

function reverseString(str) {
    return str.split('').reverse('').join('');
}

console.log(reverseString('fish')); // hsif
console.log(reverseString('murder')); //redum
