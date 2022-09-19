const { reverseSentence, addPunctuation, titleCaseWords, oddishEvenish, at } = require('./index');

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
  });
  it('should find array.at()', () => {
    const arr = [1, 2, 3, 4];
    expect(at(arr, 2)).toEqual(3);
    expect(at(arr, -1)).toEqual(4);
  });
});
