class Stack {
  #stack;

  constructor() {
    this.stack = [];
  }

  push (item) {
    this.stack.push(item);
    return item;
  }

  pop () {
    return this.stack.pop();
  }

  peek () {
    const lastIndex = this.stack.length - 1;
    return this.stack[lastIndex];
  }
}

module.exports = Stack;