class Stack {
  #list = [];

  constructor(initialList) {
    if (initialList) this.#list = initialList;
  }

  push(item) {
    this.#list.push(item);
  }

  peek() {
    return this.#list[this.#list.length - 1];
  }

  pop() {
    return this.#list.pop();
  }

  checkSyntax(code) { 
    const arrayToCheck = new Stack();
    const opening = [];
    const closing = [];
    String(code).split('').map(char => {
      if (char === '(' ||  char === ')' || char === '{' || char === '}') {
        arrayToCheck.push(char);
      }
    });
    const length = arrayToCheck.list.length;

    for (let i = 0; i < length; i++) {
      if (arrayToCheck.peek() === '(' || arrayToCheck.peek() === '{') {
        opening.push(1);
        arrayToCheck.pop();
      } else if (arrayToCheck.peek() === ')' || arrayToCheck.peek() === '}') {
        closing.push(1);
        arrayToCheck.pop();
      }

    }
    return String(opening) === String(closing) ? true : false;

  }

  get list() {
    return this.#list;
  }
}

module.exports = { Stack };
