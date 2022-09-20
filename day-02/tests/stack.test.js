const { Stack } = require('../Stack.js');

describe('Stack class', () => {
  it('stack.push should add an item', () => {
    const stack = new Stack();
    stack.push('hello');
    expect(stack.peek()).toEqual('hello');
  });
});
