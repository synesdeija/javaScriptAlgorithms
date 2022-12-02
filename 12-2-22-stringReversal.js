// Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)! 

// Hint: loop through string adding current value to previous equals a reversed string

// From: https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038

//COULD DO: str.split('').reverse().join('') but the .reverse() method takes more TIME. 
function reverseString (str){
    let reverseStr = ''
    for(let char of str){
      reverseStr = char + reverseStr
   }
   return reverseStr
}

console.log(reverseString('apple'), 'elppa')

console.log(reverseString('john'), 'nhoj')

console.log(reverseString('sarah'), 'haras')
