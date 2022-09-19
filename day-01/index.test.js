const { reverseSentence, addPunctuation } = require('./index');

describe('primitive code challenges', () => {
  describe('reverseSentence', () => {
    it('should reverse a sentence', () => {
      expect(reverseSentence('alchemy rocks gold')).toBe('ymehcla skcor dlog');
    });
  });
  it('should add punctuation to sentence', () => {
    const addExcitement = addPunctuation('!!!');

    const weee = addExcitement('weee');

    expect(weee).toEqual('weee!!!');
  })
});
