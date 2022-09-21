const { reverseSentence, addPunctuation, titleCaseWords, oddishEvenish, at, anagrams, fizzBuzz, multiples, rootDigit } = require('./index');

describe('primitive code challenges', () => {
  describe('reverseSentence', () => {
    it('should reverse a sentence', () => {
      expect(reverseSentence('alchemy rocks gold')).toBe('ymehcla skcor dlog');
    });
  });
  it('should add punctuation to sentence', () => {
    const addExcitement = addPunctuation('!!!');

    const addQuery = addPunctuation('??');

    const weee = addExcitement('weee');

    expect(weee).toEqual('weee!!!');
    expect(addQuery('huh')).toEqual('huh??');
  });
  it('Should title case words', () => {
    expect(titleCaseWords('hello everybody')).toEqual('Hello Everybody');
  });
  it('should return oddish or evenish', () => {
    expect(oddishEvenish('123')).toEqual('evenish');
    expect(oddishEvenish('313')).toEqual('oddish');
    expect(oddishEvenish('313')).toEqual('oddish');
  });
  it('should find array.at()', () => {
    const arr = [1, 2, 3, 4];
    expect(at(arr, 2)).toEqual(3);
    expect(at(arr, -1)).toEqual(4);
  });
  it('anagrams should return true/false for anagrams', () => {
    const first = 'hello';
    const second = 'hlelo';
    const fir = 'gram';
    const nichtFir = 'grum';
    expect(anagrams(first, second)).toEqual(true);
    expect(anagrams(fir, nichtFir)).toEqual(false);
  });
  it('fizzBuzz should work', () => {
    const arr =  [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzBuzz'];
    expect(fizzBuzz(15)).toEqual(arr);
  });
  it('multiples should return multiples to 50', () => {
    expect(multiples(5)).toEqual([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
    expect(multiples(20)).toEqual([20, 40]);
    expect(multiples(25)).toEqual([25, 50]);
  });
  it('rootDigit should return a single digit sum of numbers', () => {
    expect(rootDigit(123)).toEqual(6);
    expect(rootDigit(4322)).toEqual(2);
    expect(rootDigit(999888777)).toEqual(9);
  });
});
