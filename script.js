//// this way to return just one word which is the longest word

// function LongestWords(str) {
//   let words = str.split(" ");
//   let longestWord = "";
//   for (let word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }

//   return longestWord;
// }

// console.log(LongestWords("i got up early today")); // early
// console.log(LongestWords("i went straight to the beach")); // straight

// the other way is to return the longest words

function longestWords(str) {
  let words = str.split(" ");
  let size = 0;
  let max = [""];

  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= size) {
      size = words[i].length;
      if (max[max.length - 1].length < words[i].length) {
        max = [];
        max.push(words[i]);
      } else {
        max = [...max, words[i]];
      }
    }
  }
  return [...max];
}

console.log(longestWords("i got up early today")); // early
console.log(longestWords("i went straight to the beach")); // straight
