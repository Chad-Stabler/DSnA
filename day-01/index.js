function reverseSentence(str) {
  return str
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
}

function addPunctuation(string) {
  return function punctuate(quote) {
    return (`${quote}${string}`)
  };
}

function titleCaseWords(string) {
  return string
  .split(' ')
  .map(word => word[0].toUpperCase() + word.slice(1))
  .join(' ');
}
module.exports = { reverseSentence, addPunctuation, titleCaseWords };
