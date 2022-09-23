class BinaryTree {
  constructor(node) {
    this.data = node;
    this.left = null;
    this.right = null;
  }

  addTree = (node) => {
    if (node.data === this.data) {
      node.data = this.data;
    } else if (node.data < this.data) {
      if (this.left == null) {
        this.left = node;
      } else this.left.addTree(node);
    } else {
      if (this.right == null) {
        this.right = node;
      } else this.right.addTree(node);
    }

    return node;
  };
}

module.exports = { BinaryTree };
