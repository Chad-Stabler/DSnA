const { Stack } = require('../Stack.js');

describe('Stack class', () => {
  it('stack.push should add an item', () => {
    const stack = new Stack();
    stack.push('hello');
    expect(stack.peek()).toEqual('hello');
  });

  it('stack.pop() should remove last item', () => {
    const stack = new Stack();
    stack.push('wee');
    stack.push('woo');
    expect(stack.peek()).toEqual('woo');
    stack.pop();
    expect(stack.peek()).toEqual('wee');
  });
  it('checking syntax should work', () => {
    const stack = new Stack();
    expect(stack.checkSyntax('((2 + 3) * (4 + 11 * (2 - 1)))')).toEqual(true);
  });
});
