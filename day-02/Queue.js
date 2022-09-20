class Queue {
  #list = [];

  constructor(initialList) {
    if (initialList) this.#list = initialList;
  }

  enqueue(item) {
    this.#list.push(item);
  }

  peek() {
    return this.#list[this.#list.length - 1];
  }
  
}

module.exports = { Queue };
