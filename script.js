function LongestWords(str) {
  let words = str.split(" ");
  let longestWord = "";
  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

console.log(LongestWords("i got up early today"));
console.log(LongestWords("i went straight to the beach"));
