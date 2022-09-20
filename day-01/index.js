function reverseSentence(str) {
  return str
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
}

function addPunctuation(string) {
  return function punctuate(quote) {
    return (`${quote}${string}`);
  };
}

function titleCaseWords(string) {
  return string
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}

function oddishEvenish(number) {
  let num = 0;
  String(number).split('').map(number => num += Number(number));
  return num % 2 === 0 ? 'evenish' : 'oddish';
}

function at(arr, i) {
  return i >= 0 ? arr[i] : arr[arr.length + i];
}

function anagrams(str1, str2) {
  const ein = str1.split('');
  const swei = str2.split('');

  return ein.map(letter => swei.includes(letter)).includes(false) ? false : true;
}

function fizzBuzz(number) {
  const arr = [];
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push ('fizzBuzz');
    } else if (i % 3 === 0) {
      arr.push('fizz');
    } else if (i % 5 === 0) {
      arr.push('buzz');
    } else arr.push(i);
  }
  return arr;
}

function multiples(number) {
  const arr = [];
  if (number >= 50) return arr;
  for (let i = 1; i <= 50; i++) {
    if (i % number === 0) arr.push(i);
  }
  return arr;
}

function rootDigit(n) {
  const digits = n.toString().split('');
  const numbers = digits.map(d => +d);
  const sum = numbers.reduce((a, b) => a + b);

  return String(sum).split('').length === 1 ? sum : rootDigit(sum);
}

module.exports = { reverseSentence, addPunctuation, titleCaseWords,
  oddishEvenish, at, anagrams,
  fizzBuzz, multiples, rootDigit };
