const { Queue } = require('../Queue.js');

describe('Queue class', () => {
  it('queue.enqueue should add an item', () => {
    const queue = new Queue();
    queue.enqueue('hello');
    expect(queue.hasNext()).toEqual(true);
  });
  it('queue.dequeue should remove first item', () => {
    const queue = new Queue();
    queue.enqueue('hello');
    expect(queue.hasNext()).toEqual(true);
    queue.dequeue();
    expect(queue.hasNext()).toEqual(false);
  });
});
