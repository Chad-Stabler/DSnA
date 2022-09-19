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

function oddishEvenish(string) {
  let num = 0
  string.split('').map(number => num += Number(number));
  return num % 2 === 0 ? 'evenish' : 'oddish';
}

function at(arr, i) {
  return i >= 0 ? arr[i] : arr[arr.length + i];
}

module.exports = { reverseSentence, addPunctuation, titleCaseWords, oddishEvenish, at };
