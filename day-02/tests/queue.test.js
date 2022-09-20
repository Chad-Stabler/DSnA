const { Queue } = require('../Queue.js');

describe('Queue class', () => {
  it('queue.enqueue should add an item', () => {
    const queue = new Queue();
    queue.enqueue('hello');
    expect(queue.peek()).toEqual('hello');
  });
});
