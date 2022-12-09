

// Then try tackling tomorrow's question!

 
// Given a string of characters, return the character that appears the most often.

// describe("Max Character", () => {
//  it("Should return max character", () => {
//   assert.equal(max("Hello World!"), "l");
//  });
// });

// No String or Array Methods (well brute force it first, but then no methods)! 


// Hint: Use the "hash map" pattern from previous questions 
// aka put each character in an object with its count 
// and then find the highest by looping through


// const max = string => {
//     const characters = {};
  
//     for (let character of string)
//       characters[character] = characters[character] + 1 || 1;
  
//     let maxCount = 0;
//     let maxCharacter = null;
  
//     for (let character in characters) {
//       if (characters[character] > maxCount) {
//         maxCount = characters[character];
//         maxCharacter = character;
//       }
//     }
  
//     return maxCharacter;
//   };



function maxCharacter(str){
  let charMap = {}   //object literal creation (key:val pairs)
      count = 0
      maxChar = null
  for (const char of str)
    charMap[char] = charMap[char] + 1  || 1   //double pipe is like "or, if the first thing didn't feel right, do my thing"
}
for (const char in charMap){
  if(charMap[char] > count){
      count = charMap[char]
      maxChar = char
  }
}
return maxChar



//   let maxCount = 0
//   let maxChar = null
//   for (let char in chars){
//     if(chars[char] > maxCount){
//       maxCount = chars[char]
//       maxChar = char
//     }
//   }
//   return maxCharacter
// }

console.log(maxCharacter("Hello World!"), 'l')


// From: https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038 (#5)

