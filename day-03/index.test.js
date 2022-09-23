const { BinaryTree } = require('./index');

describe('node based data structures', () => {
  it('add node should add node', () => {
    const A = new BinaryTree('A');
    const B = new BinaryTree('B');
    const C = new BinaryTree('C');
    const D = new BinaryTree('D');
    B.addTree(A);
    B.addTree(D);
    B.addTree(C);
    expect(B.right).toEqual({ 'addTree':
    expect.any(Function), 'data': 'D', 'left':
    { 'addTree': expect.any(Function),
      'data': 'C', 'left': null, 'right': null }, 'right': null });
  });
});
